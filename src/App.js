import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { Routes, Route ,Navigate} from "react-router-dom";
import { useContext } from "react";
import "./style.css";
import { AuthContext } from "./context/AuthContext.js";
function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  return (
    <Routes>
      <Route exact path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
        } />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>

  );
}

export default App;
