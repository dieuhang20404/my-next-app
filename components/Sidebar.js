import Link from "next/link";
console.log("dang chay sidebar");
export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      {/* Logo */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">🚀 Logo</h2>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
          Dashboard
        </Link>
        <Link href="/register-card" className="px-4 py-2 hover:bg-gray-700 rounded">
          Đăng ký thẻ tháng
        </Link>
        <Link href="/manage-cards" className="px-4 py-2 hover:bg-gray-700 rounded">
          Quản lý thẻ xe
        </Link>
        <Link href="/revenue-report" className="px-4 py-2 hover:bg-gray-700 rounded">
          Báo cáo doanh thu
        </Link>
        <Link href="/manage-staff" className="px-4 py-2 hover:bg-gray-700 rounded">
          Quản lý nhân viên
        </Link>
      </nav>
    </div>
  );
}
