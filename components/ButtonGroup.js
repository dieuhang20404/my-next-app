import React from "react";
import styles from "../styles/register-card.module.css"
export default function ButtonGroup({ onRegister, onRenew, onList, onEdit }) {
  return (
    <div className={styles.button}>
      <button className={styles.box} onClick={onRegister}>Đăng ký</button>
      <button className={styles.box} onClick={onRenew}>Gia hạn</button>
      <button className={styles.box} onClick={onList}>Danh sách</button>
      <button className={styles.box} onClick={onEdit}>Sửa đổi</button>
    </div>
  );
}
