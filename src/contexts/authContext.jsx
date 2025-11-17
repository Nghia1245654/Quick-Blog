import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { login } from "@/services/api/user";
import { toast } from "react-hot-toast";
import { getme } from "@/services/api/user";
import { signUpUser } from "@/services/api/user";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || {}
  );
  const [role, setRole] = useState(
    JSON.parse(localStorage.getItem("userInfo"))?.role || []
  );
  const logout = () => {
    try {
      localStorage.removeItem("userInfo");
    } catch (e) {
      console.error("Error removing userInfo from localStorage:", e);
    }
  };
  const registerUser = async (email, username, password) => {
    try {
      const res = await signUpUser({ email, username, password });

      if (res.status === 200) {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Register failed");
    }
  };

  const loginUser = async (email, password) => {
    try {
      const res = await login({ email, password });
      if (res.status === 200) {
        // 1. Thông tin cơ bản sau login
        const basicUser = res.data;
        // 2. Lấy thêm thông tin user từ API getMe
        localStorage.setItem("userInfo", JSON.stringify(basicUser));
          let fullUser = basicUser;
          const userRes = await getme({ token: basicUser.token });
        if (userRes.status === 200) {
          fullUser = { ...basicUser, ...userRes.data.user };
        }
        // 3. Cập nhật Context
        setRole(fullUser.role);
        setUserInfo(fullUser);
        // 4. Lưu localStorage
        localStorage.setItem("userInfo", JSON.stringify(fullUser));
        // 5. Quan trọng — return fullUser để navigat
        return fullUser;
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <AuthContext.Provider
      value={{ userInfo, loginUser, role, logout, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
