import { useState, useEffect } from "react";
import styles from "../styles/thanh_thong_tin.module.css"; // Import CSS module

export default function ParkingInfo() {
  const [soXeTrongBai, setSoXeTrongBai] = useState(0);
  const tongSoViTri = 100;
  const [nhanVienTruc, setNhanVienTruc] = useState("Nguyễn Văn A");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Cập nhật thời gian mỗi giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval); // Xóa interval khi component bị unmount
  }, []);

  // Khi có xe vào
  const xeVao = () => {
    if (soXeTrongBai < tongSoViTri) {
      setSoXeTrongBai(soXeTrongBai + 1);
    } else {
      alert("Bãi đã đầy!");
    }
  };

  // Khi có xe ra
  const xeRa = () => {
    if (soXeTrongBai > 0) {
      setSoXeTrongBai(soXeTrongBai - 1);
    } else {
      alert("Không có xe nào trong bãi!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}> 
        <p className={styles.text}>🚗 Số lượng xe trong bãi: <strong className={styles.strong}>{soXeTrongBai}</strong></p> 
      </div>
      <div className={styles.box}>
        <p className={styles.text}>🅿️ Vị trí còn trống: <strong className={styles.strong}>{tongSoViTri - soXeTrongBai}</strong></p>
      </div>
      <div className={styles.box}>
        <p className={styles.text}>👤 Nhân viên:<br/> <strong className={styles.strong}>{nhanVienTruc}</strong></p>
      </div>
      <div className={styles.box}>
        <p className={styles.text}>⏰ <strong className={styles.strong}>{currentTime.toLocaleString()}</strong></p>
      </div>
    </div>
  );
}
