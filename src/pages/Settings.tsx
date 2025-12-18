import { auth } from "../services/firebase";

export default function Settings() {
  const user = auth.currentUser;

  return (
    <div className="settings-page">
      {/* Header */}
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account</p>
      </div>

      {/* Profile Card */}
      <div className="profile-card-ditto">
        <h3>Profile</h3>

        <div className="profile-top">
          <div className="profile-avatar">
            👤
          </div>
          <div>
            <h4>{user?.displayName || "test"}</h4>
            <p>{user?.email}</p>
          </div>
        </div>

        <div className="profile-field">
          <span className="field-label">Name</span>
          <span className="field-value">
            {user?.displayName || "test"}
          </span>
        </div>

        <div className="profile-field">
          <span className="field-label">Email</span>
          <span className="field-value">
            {user?.email}
          </span>
        </div>
      </div>

      {/* Logout */}
      <button
        className="logout-ditto"
        onClick={() => auth.signOut()}
      >
        Logout
      </button>
    </div>
  );
}
