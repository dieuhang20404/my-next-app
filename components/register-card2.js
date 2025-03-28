import styles from "../styles/form.module.css";
import { useEffect } from "react";
import PaymentMethod from "../components/paymentMethod";
const vehiclePrices = {
  "bike": 25000,
  "moto": 100000,
  "sh": 150000
}
export default function RegisterCard({ formAmount,formData, onChange, onSubmit, setFormAmount }) {
  useEffect(() => {
      if(formData.typeVehicle){
        setFormAmount((prev=>({
          ...prev,
          amount: vehiclePrices[formData.typeVehicle] || "",
        })));
      }
  }, [formData.typeVehicle]);
  return (
    <div className={styles.form_}>
      <form className={styles.form_register} onSubmit={onSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="amount">Thanh toán:</label>
          <input
            className={styles.input}
            type="text"
            id="amount"
            name="amount"
            value={formAmount.amount}
            onChange={onChange}
            readOnly
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="idCard">Mã thẻ xe</label>
          <input
            className={styles.input}
            type="text"
            id="idCard"
            name="idCard"
            value={formAmount.idCard}
            onChange={onChange}
            required
          />
        </div>
        <div className={styles.form_group}>
          <PaymentMethod byPay={formAmount.byPay} onChange={onChange} />
        </div>
        <div style={{display:"flex", gap:"10px"}}>
          <button className={styles.button} type="submit">
            Quay lại
          </button>
          <button className={styles.button} type="submit">
            Tiếp tục
          </button>
        </div>
      </form>
    </div>
  );
}
