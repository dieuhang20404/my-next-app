import { useState } from "react";
import { useRouter } from "next/router";
import { Box, TextField, Button, Typography } from "@mui/material";
import styles from "../styles/loginForm.module.css"
console.log("Trang đang chạy: login.tsx");

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Đang xử lý đăng nhập...");
    try {
      console.log("🔄 Bắt đầu gọi API login...");
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      
      console.log("📌 Phản hồi từ server:", res);
    
      const text = await res.text(); // Lấy dữ liệu dưới dạng text
     
      console.log("📌 Nội dung phản hồi (raw text):", text);
    
      let data;
      try {
        data = JSON.parse(text); // Chỉ parse nếu text hợp lệ
      } catch (parseError) {
        console.error("❌ Lỗi khi parse JSON:", parseError);
        throw new Error("Phản hồi từ server không phải JSON hợp lệ!");
      }
      
      if (res.ok && data.user) {
       
        console.log("✅ Đăng nhập thành công!", data);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/dashboard");
      } else {
        alert("dang nhap that bai");
        console.log("❌ Đăng nhập thất bại:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("🚨 Lỗi kết nối đến server:", error);
      alert("Không thể kết nối đến server!");
    }
    
  };
  

  return (
    <Box className={styles.container}>
      <Typography variant="h4">QUẢN LÝ NHÀ XE</Typography>
      <Box component="form" onSubmit={handleLogin} className={styles.formBox}>
        
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Đăng Nhập
        </Button>
      </Box>
    </Box>
  );
}

