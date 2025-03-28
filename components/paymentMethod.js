import { useState } from "react";
import styles from "../styles/form.module.css";

const PaymentMethod = ({ byPay, onChange }) => {
  const [showQR, setShowQR] = useState(false);

  const handlePaymentChange = (e) => {
    onChange(e); // Cập nhật giá trị thanh toán
    setShowQR(e.target.value === "bank"); // Chỉ hiện QR nếu chọn "Ngân hàng"
  };

  return (
    <div className={styles.form_group}>
      <label className={styles.paymentLabel}>Phương thức thanh toán</label>
      <select
        name="byPay"
        value={byPay}
        onChange={handlePaymentChange}
        className={styles.selectBox}
      >
        <option value="cash">Tiền mặt</option>
        <option value="bank">Ngân hàng</option>
        <option value="credit">Thẻ tín dụng</option>
      </select>

      {/* Hiển thị QR nếu chọn "Ngân hàng" */}
      {showQR && (
        <div >
          <p>Quét mã QR để thanh toán:</p>
          <img
            src="/file.svg"
            alt="QR Code"
            
          />
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
