import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";

export default function SidebarLayout() {
  const navigate = useNavigate();

  const logout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="logo-text">AirNest Home</h2>
        {/* Home Harmony */}

        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/rooms">Rooms</NavLink>
        <NavLink to="/settings">Settings</NavLink>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
