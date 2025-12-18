import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { auth } from "./services/firebase";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SidebarLayout from "./layout/SidebarLayout";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Settings from "./pages/Settings";

function App() {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return auth.onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route element={<SidebarLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
