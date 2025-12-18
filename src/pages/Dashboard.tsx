import { useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { socket, BACKEND_URL } from "../services/socket";

interface SensorData {
  temperature?: number;
  humidity?: number;
  h2_ppm?: number;
  co_ppm?: number;
  ch4_ppm?: number;
  aqi?: number;
}

export default function Dashboard() {
  const [deviceId, setDeviceId] = useState("");
  const [data, setData] = useState<SensorData>({});
  const [loading, setLoading] = useState(false);

  // 🔁 cleanup (same device multiple times issue fix)
  useEffect(() => {
    return () => {
      socket.removeAllListeners();
    };
  }, []);

  // 🔒 CLAIM DEVICE (LOGIC ONLY)
  const claimDevice = async () => {
    if (!deviceId) {
      alert("❌ Please enter Device ID");
      return;
    }

    try {
      setLoading(true);

      const token = await auth.currentUser?.getIdToken();

      const res = await fetch(`${BACKEND_URL}/claim-device`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ deviceId }),
      });

      const result = await res.json();

      if (!result.success) {
        alert(result.message || "❌ Device claim failed");
        return;
      }

      // ✅ SAME NOTIFICATION AS OLD app.js
      alert("✅ Device claimed successfully");

      // 🔌 SAME SOCKET LISTENER AS OLD app.js
      socket.off(`update-${deviceId}`);
      socket.on(`update-${deviceId}`, (payload: SensorData) => {
        setData(payload);
      });

    } catch (err) {
      alert("❌ Server error while claiming device");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI (NO CHANGE BELOW) ================= */

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Monitor your smart home environment</p>
      </div>

      {/* Claim Device Card (DESIGN SAME) */}
      <div className="claim-card">
        <h3>Claim Device</h3>
        <div className="claim-row">
          <input
            placeholder="Enter Device ID"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
          />
          <button onClick={claimDevice} disabled={loading}>
            {loading ? "Claiming..." : "＋ Claim Device"}
          </button>
        </div>
      </div>

      {/* Sensor Data */}
      <h3 className="section-title">Sensor Data</h3>

      <div className="sensor-grid">
        <Sensor
          type="temp"
          title="Temperature"
          value={`${data.temperature ?? "--"} °C`}
        />
        <Sensor
          type="humidity"
          title="Humidity"
          value={`${data.humidity ?? "--"} %`}
        />
        <Sensor
          type="h2"
          title="H₂ Gas"
          value={`${data.h2_ppm ?? "--"} ppm`}
        />
        <Sensor
          type="co"
          title="CO Gas"
          value={`${data.co_ppm ?? "--"} ppm`}
        />
        <Sensor
          type="ch4"
          title="CH₄ Gas"
          value={`${data.ch4_ppm ?? "--"} ppm`}
        />
        <Sensor
          type="aqi"
          title="AQI"
          value={`${data.aqi ?? "--"}`}
        />
      </div>
    </div>
  );
}

/* ================= SENSOR CARD (DESIGN SAME) ================= */

function Sensor({
  type,
  title,
  value,
}: {
  type: "temp" | "humidity" | "h2" | "co" | "ch4" | "aqi";
  title: string;
  value: string;
}) {
  const icons: Record<string, string> = {
    temp: "🌡️",
    humidity: "💧",
    h2: "🌀",
    co: "🔥",
    ch4: "🍃",
    aqi: "📈",
  };

  return (
    <div className="sensor-card-ditto">
      <div className={`sensor-icon ${type}`}>
        {icons[type]}
      </div>

      <div className="sensor-info">
        <p>{title}</p>
        <h4>{value}</h4>
      </div>
    </div>
  );
}
