import { useRouter } from "next/router";
import { useEffect, useState } from "react";

console.log("Trang đang chạy: dashboard.tsx");
export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

  // Kiểm tra đăng nhập
  useEffect(() => {
    if (typeof window !== "undefined") { // Đảm bảo chỉ chạy trên client
      setTimeout(() => { // Đợi 500ms để localStorage ổn định
        const loggedInUser = localStorage.getItem("user");
        console.log("Kiểm tra user từ localStorage:", loggedInUser); // Debug
        if (!loggedInUser) {
          router.push("/login"); 
        } else {
          setUser(loggedInUser);
        }
      }, 5000);
    }
  }, []);
  
  

  // Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
        {/* Logo */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">🚀 Logo</h2>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-4">
          <a href="/dashboard" className="px-4 py-2 bg-gray-700 rounded">Dashboard</a>
          <a href="/profile" className="px-4 py-2 hover:bg-gray-700 rounded">Hồ sơ</a>
          <a href="/settings" className="px-4 py-2 hover:bg-gray-700 rounded">Cài đặt</a>
        </nav>

        {/* Nút Đăng xuất */}
        <button onClick={handleLogout} className="mt-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Đăng xuất
        </button>
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Chào mừng {user}!</h1>
        <p>Đây là trang Dashboard của bạn.</p>
      </div>
    </div>
  );
}
