export default function Rooms() {
  return (
    <div className="rooms-page">
      {/* Header */}
      <div className="rooms-header">
        <h1>Rooms</h1>
        <p>Manage your home spaces</p>
      </div>

      {/* Rooms Grid */}
      <div className="rooms-grid">
        <RoomCard
          title="Living Room"
          devices="4 devices"
          icon="🛋️"
          color="living"
        />
        <RoomCard
          title="Bedroom"
          devices="3 devices"
          icon="🛏️"
          color="bedroom"
        />
        <RoomCard
          title="Kitchen"
          devices="5 devices"
          icon="🍴"
          color="kitchen"
        />
        <RoomCard
          title="Bathroom"
          devices="2 devices"
          icon="🛁"
          color="bathroom"
        />
        <RoomCard
          title="Garage"
          devices="2 devices"
          icon="🚗"
          color="garage"
        />
        <RoomCard
          title="Office"
          devices="3 devices"
          icon="💼"
          color="office"
        />
      </div>
    </div>
  );
}

function RoomCard({
  title,
  devices,
  icon,
  color,
}: {
  title: string;
  devices: string;
  icon: string;
  color: string;
}) {
  return (
    <div className="room-card-ditto">
      <div className={`room-icon ${color}`}>
        <span>{icon}</span>
      </div>

      <div className="room-info">
        <h3>{title}</h3>
        <p>{devices}</p>
      </div>
    </div>
  );
}
