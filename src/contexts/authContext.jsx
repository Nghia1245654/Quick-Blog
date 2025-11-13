import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { login} from "@/services/api/user";
import { toast } from "react-hot-toast";
import { getme } from "@/services/api/user";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
const[role,setRole] = useState(JSON.parse(localStorage.getItem("userInfo"))?.role || []);
 const logout = () => {
    try {
      localStorage.removeItem("userInfo");
    } catch (e) {
      console.error("Error removing userInfo from localStorage:", e);
    }
  };
  const loginUser = async (email, password) => {
    try {
      const res = await login({ email, password });

      if (res.status === 200) {
        setUserInfo(res.data);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        //gọi đến api để lấy thông tin user
        const userRes = await getme({ token: res.data.token });
        if (userRes.status === 200) {
          setUserInfo({ ...res.data, ...userRes.data.user });
          localStorage.setItem("userInfo", JSON.stringify({ ...res.data, ...userRes.data.user }));
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

 

  return (
    <AuthContext.Provider value={{ userInfo, loginUser, role, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
