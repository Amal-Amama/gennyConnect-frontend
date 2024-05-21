// "use client";
// import React, { createContext, ReactNode, useEffect, useState } from "react";

// import { useRouter } from "next/navigation";
// interface User {
//   // Define your user object properties here
// }

// interface AuthContextType {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
// }

// export const authContext = createContext<AuthContextType>({
//   user: null,
//   setUser: () => {},
// });

// interface AuthContextProviderProps {
//   children: ReactNode;
// }

// export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
//   children,
// }: AuthContextProviderProps) => {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter();
//   useEffect(() => {
//     const currentUser = localStorage.getItem("user");
//     if (currentUser) {
//       const parsedUser: User = JSON.parse(currentUser);
//       setUser(parsedUser);
//       console.log(parsedUser);
//       if (parsedUser?.role === "client") {
//         router.push(`/client/${parsedUser.userId}`);
//       }
//     }
//   }, []);

//   return (
//     <authContext.Provider value={{ user, setUser }}>
//       {children}
//     </authContext.Provider>
//   );
// };
// context/AuthContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
interface AuthContextType {
  user: any;
  loading: boolean;
  handleLogin: (loginData: {
    email: string;
    password: string;
  }) => Promise<void>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const storedUser = localStorage.getItem("user");

    if (accessToken && refreshToken && storedUser) {
      const decoded = jwtDecode(accessToken);
      setUser(decoded);
      redirectUser(JSON.parse(storedUser));
    } else if (refreshToken) {
      handleRefreshToken(refreshToken);
    }
    setLoading(false);
  }, []);

  const handleLogin = async (loginData: {
    email: string;
    password: string;
  }) => {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message);
    }
    const { accessToken, refreshToken, user } = responseData;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    redirectUser(user);
  };
  console.log(user);
  const handleLogout = async () => {
    await fetch("http://localhost:5000/auth/logout", { method: "POST" });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  const handleRefreshToken = async (token: string) => {
    const response = await fetch("http://localhost:5000/auth/refresh", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    const { accessToken, refreshToken } = responseData;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    const decoded = jwtDecode(accessToken);
    setUser(decoded);
  };
  const redirectUser = (user: any) => {
    if (user.role === "client") {
      router.push(`/client/${user.id}`);
    } else if (user.role === "technician") {
      router.push(`/technician/${user.id}`);
    } else if (user.role === "admin") {
      router.push(`/admin/${user.id}`);
    } else {
      router.push(`/company/${user.id}`);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
