import Sidebar from "../components/Sidebar";
import HomeTop from "../components/thanh_thong_tin";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/dashboard.module.css";

export default function EmployeeManagement() {
  const router = useRouter();
  const [user, setUser] = useState("/manage-staff");

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
    <div className={styles.employeeManagement__container}>
      

      {/* Nội dung chính */}
      <div className={styles.employeeManagement__content}>
        <HomeTop />
        
        {/* Quản lý nhân viên */}
        <div className={styles.employeeManagement__section}>
          <h2 className={styles.employeeManagement__title}>Quản Lý Nhân Viên</h2>
          
          <div className={styles.employeeManagement__buttons}>
            <button className={styles.employeeManagement__button}>Thêm Nhân Viên</button>
            <button className={styles.employeeManagement__button}>Sửa Thông Tin</button>
            <button className={styles.employeeManagement__button}>Xóa Nhân Viên</button>
            <button className={styles.employeeManagement__button}>Sửa Trạng Thái</button>
          </div>

          {/* Danh sách nhân viên */}
          <div className={styles.employeeManagement__list}>
            <table className={styles.employeeManagement__table}>
              <thead>
                <tr>
                  <th className={styles.employeeManagement__tableHeader}>ID</th>
                  <th className={styles.employeeManagement__tableHeader}>Tên</th>
                  <th className={styles.employeeManagement__tableHeader}>Vai trò</th>
                  <th className={styles.employeeManagement__tableHeader}>Trạng thái</th>
                  <th className={styles.employeeManagement__tableHeader}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {/* Bạn có thể map dữ liệu nhân viên từ backend ở đây */}
                <tr className={styles.employeeManagement__tableRow}>
                  <td className={styles.employeeManagement__tableData}>1</td>
                  <td className={styles.employeeManagement__tableData}>Nguyễn Văn A</td>
                  <td className={styles.employeeManagement__tableData}>ADMIN</td>
                  <td className={styles.employeeManagement__tableData}>Hoạt động</td>
                  <td className={styles.employeeManagement__tableData}>
                    <button className={styles.employeeManagement__actionButton}>Sửa</button>
                    <button className={styles.employeeManagement__actionButton}>Xóa</button>
                    <button className={styles.employeeManagement__actionButton}>Đổi Trạng Thái</button>
                  </td>
                </tr>
                {/* Add more employee rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
