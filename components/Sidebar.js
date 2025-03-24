import Link from "next/link";
import styles from "../styles/sidebar.module.css"; // Import CSS module

export default function Sidebar() {
  const handleLogout = () => {
    alert("Đang đăng xuất...");
    console.log("Đang đăng xuất...");
  };

  return (
    <div className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <h2>QUẢN LÝ NHÀ XE</h2>
      </div>

      {/* Menu */}
      <nav>
        <Link href="/dashboard" className={styles.menuItem}>Trang chủ</Link>
        <Link href="/register-card" className={styles.menuItem}>Đăng ký thẻ tháng</Link>
        <Link href="/manage-cards" className={styles.menuItem}>Quản lý thẻ xe</Link>
        <Link href="/missing-report" className={styles.menuItem}>Báo mất thẻ</Link>
        <Link href="/revenue-report" className={styles.menuItem}>Báo cáo doanh thu</Link>
        <Link href="/price-setting" className={styles.menuItem}>Thiết lập giá vé</Link>
        <Link href="/manage-staff" className={styles.menuItem}>Quản lý nhân viên</Link>
      </nav>

      {/* Đăng xuất */}
      <button onClick={handleLogout} className={styles.logoutBtn}>
        Đăng xuất
      </button>
    </div>
  );
}
