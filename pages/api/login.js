import bcrypt from "bcryptjs";
console.log("api/log");
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Tài khoản cố định
  const fixedUser = {
    username: "helen",
    passwordHash: await bcrypt.hash("123456", 10), // Băm mật khẩu trước để so sánh
  };

  const { username, password } = req.body;

  // Kiểm tra username
  if (username !== fixedUser.username) {
    return res.status(401).json({ message: "Sai tài khoản" });
  }

  // Kiểm tra mật khẩu (so sánh với mật khẩu băm)
  const isValid = await bcrypt.compare(password, fixedUser.passwordHash);
  if (!isValid) {
    console.log(password);
    console.log(fixedUser.passwordHash);
    return res.status(401).json({ message: "Sai mật khẩu" });
  }

  return res.status(200).json({ message: "Đăng nhập thành công", username });
}
