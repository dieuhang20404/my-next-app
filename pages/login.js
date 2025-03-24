import { useState } from "react";
import { useRouter } from "next/router";
import { Box, TextField, Button, Typography } from "@mui/material";

console.log("Trang đang chạy: login.tsx");

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault(); // Ngăn form load lại trang

    console.log("Đang xử lý đăng nhập...");
    console.log("Username:", username);
    console.log("Password:", password);

    // Kiểm tra username, password (chỉ dùng khi chưa có backend)
    if (username === "helen" && password === "123456") {
      console.log("Đăng nhập thành công!");
      localStorage.setItem("user", JSON.stringify({ username }));
      router.push("/dashboard"); // Chuyển hướng tới dashboard
    } else {
      console.log("Tên đăng nhập hoặc mật khẩu không đúng!");
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Đăng Nhập</Typography>
      <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
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
