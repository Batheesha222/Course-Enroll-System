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
      const studentData = JSON.parse(stringifyStudentData);
      setAuth(studentData);
    } else {
      setAuth(null);
    }
  }, [navigate, location]);
  // Sync auth state with localStorage whenever auth changes
  useEffect(() => {
    if (auth) {
      window.localStorage.setItem("studentData", JSON.stringify(auth));
    } else {
      window.localStorage.removeItem("studentData");
    }
  }, [auth])
  

  return (
  <AuthContext.Provider value={auth }>
    {children}
  </AuthContext.Provider>
  );
};

// export const useAuth = () => useContext(AuthContext);

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};