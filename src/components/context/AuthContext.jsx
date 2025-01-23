import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stringifyStudentData = window.localStorage.getItem("studentData");

    if (stringifyStudentData) {
      const student = JSON.parse(stringifyStudentData);
      setAuth(student);
    } else {
      setAuth(null);
    }
  }, [navigate, location]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};