import { useEffect } from "react";
import styles from "../styles/form.module.css";
export default function RegisterCard({ formData, onChange, onSubmit, setFormData }) {
  useEffect(() => {
    let today = new Date();
    let formattedDate = today.getDate().toString().padStart(2,'0') + '/' +
                        (today.getMonth() + 1).toString().padStart(2,'0') + '/' +
                        today.getFullYear();

    let expirationDate = new Date(today);
    expirationDate.setMonth(expirationDate.getMonth() + 1);

    let formattedExpirationDate = expirationDate.getDate().toString().padStart(2,'0') + '/' +
                                  (expirationDate.getMonth() + 1).toString().padStart(2, '0') + '/' +
                                  expirationDate.getFullYear();

    setFormData(prev => ({
      ...prev,
      activation: formattedDate,
      expriry: formattedExpirationDate
    }));

  }, [setFormData]);
  return (
    <div className={styles.form_}>
      <form   className={styles.form_register} onSubmit={onSubmit} >
       <div className={styles.form_group}>
              <label htmlFor="name">Chủ xe</label>
              <input className={styles.input}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={onChange}
                required
              />
        </div>
        <div className={styles.form_group}>
              <label htmlFor="idName">Mã sinh viên/ giảng viên</label>
              <input className={styles.input}
                type="text"
                id="idName"
                name="idName"
                value={formData.idName}
                onChange={onChange}
                required
              />
        </div>
        <div className={styles.form_group}>
              <label htmlFor="licensePlate">Biển số xe</label>
              <input className={styles.input}
                type="text"
                id="licensePlate"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={onChange}
                required
              />
        </div>
        <div className={styles.form_group}>
              <label htmlFor="activation">Ngày đăng ký</label>
              <input className={styles.input}
                type="text"
                id="activation"
                name="activation"
                value={formData.activation}
                readOnly
              />
        </div>
        <div className={styles.form_group}>
              <label htmlFor="expriry">Ngày hết hạn</label>
              <input className={styles.input}
                type="text"
                id="expriry"
                name="expriry"
                value={formData.expriry}
                onChange={onChange}
                readOnly
                />
        </div>
        <div className={styles.form_group}>
              <label htmlFor="typeVehicle">Loại xe</label>
              <select
                name="typeVehicle"
                value={formData.typeVehicle}
                onChange={onChange}
                className={styles.selectBox}
              >
                <option value="bike">Xe đạp</option>
                <option value="moto">Xe máy</option>
                <option value="sh">Xe tay ga</option>
              </select>
        </div>
        <div className={styles.form_group}>
              <label htmlFor="colorVehicle">Màu xe</label>
              <input className={styles.input}
                type="text"
                id="colorVehicle"
                name="colorVehicle"
                value={formData.colorVehicle}
                onChange={onChange}
                required
                />
        </div>
        <div className={styles.form_group}>
              <label htmlFor="brandVehicle">Hãng xe</label>
              <input className={styles.input}
                type="text"
                id="brandVehicle"
                name="brandVehicle"
                value={formData.brandVehicle}
                onChange={onChange}
                required
                />
        </div>
      <button className={styles.button} type="submit">Tiếp tục</button>
    </form>
    </div>
    
  );
}
