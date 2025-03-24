import Sidebar from "../components/Sidebar";
import HomePage from "../components/home";
import HomeTop from "../components/thanh_thong_tin";
import HomePicture from "../components/camera";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/dashboard.module.css";
export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedInUser = localStorage.getItem("user");
  
      if (!loggedInUser) {
        router.push("/login");
      } else {
        try {
          const parsedUser = JSON.parse(loggedInUser);
          if (parsedUser?.username) {
            setUser(parsedUser.username);
          } else {
            console.error("Dữ liệu user không hợp lệ:", parsedUser);
            localStorage.removeItem("user"); // Xóa dữ liệu lỗi
            router.push("/login");
          }
        } catch (error) {
          console.error("Lỗi JSON.parse:", error);
          localStorage.removeItem("user"); // Xóa dữ liệu lỗi
          router.push("/login");
        }
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {/* Sidebar */}
        <Sidebar />
      </div>
      
      {/* Nội dung chính */}
      <div className={styles.flex-1}>
        <HomeTop />
        <HomePage />
        
      </div>
    </div>
  );
}
