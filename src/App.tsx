import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home/Home";
import { Toaster } from "./components/ui/toaster";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
const App = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Toaster />
      <Routes>
        {user ? (
          <Route path="/" element={<Home />} />
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
