import { useState } from "react";
import { useRouter } from "next/router";
import { Box, TextField, Button, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    cccd: "",
    birthDate: "",
    gender: "male",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  // Xử lý thay đổi dữ liệu nhập vào form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Xử lý đăng ký tài khoản
  const handleRegister = async (e) => {
    e.preventDefault();

    // Kiểm tra dữ liệu
    if ( !form.fullName || !form.cccd || !form.birthDate || !form.phone || !form.email || !form.username || !form.password) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Gửi dữ liệu lên API (giả lập)
    console.log("Gửi dữ liệu đăng ký:", form);

    // Lưu user vào localStorage để kiểm tra
    localStorage.setItem("user", JSON.stringify({ username: form.username, password: form.password }));

    // Chuyển hướng về trang đăng nhập sau khi đăng ký thành công
    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    router.push("/login");
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 5, textAlign: "center", p: 3, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h4">Đăng Ký</Typography>
      <Box component="form" onSubmit={handleRegister} sx={{ mt: 2 }}>
        <TextField label="Tên đăng nhập" name="username" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Mật khẩu" type="password" name="password" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Họ và tên" name="fullName" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Mã CCCD" name="cccd" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Ngày sinh" type="date" name="birthDate" fullWidth margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />

        <FormLabel component="legend" sx={{ mt: 2, textAlign: "left" }}>Giới tính</FormLabel>
        <RadioGroup row name="gender" value={form.gender} onChange={handleChange}>
          <FormControlLabel value="male" control={<Radio />} label="Nam" />
          <FormControlLabel value="female" control={<Radio />} label="Nữ" />
        </RadioGroup>

        <TextField label="Số điện thoại" name="phone" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: "100%" }}>
          Đăng Ký
        </Button>
      </Box>
    </Box>
  );
}
