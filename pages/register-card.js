import React, { useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import Sidebar from "../components/Sidebar";
import RegisterCard from "../components/register-card1"; 
import styles from "../styles/register-card.module.css";
import Submit from "../components/register-card2"; 

export default function DangKyThe() {
  const [showForm, setShowForm] = useState(false);
  const [showAmountForm, setShowAmountForm] = useState(false); // State để hiển thị form số tiền

  const [formData, setFormData] = useState({
    name: "",
    idName: "",
    licensePlate: "",
    activation: "",
    expriry: "",
    typeVehicle: "",
    brandVehicle: "",
    colorVehicle: "",
  });

  const [formAmount, setFormAmount] = useState({
    amount: "",
    idCard: "",
    byPay: "",
  });

  const validateName = (value) => {
    const nameRegex = /^[A-Za-zÀ-Ỹà-ỹ\s]+$/;
    return nameRegex.test(value.trim());
  }
  
  const validateLicensePlate = (value) => {
    const plateRegex = /^[0-9]{2}[A-Z]-[0-9]{4,5}$/;
    return plateRegex.test(value);
  }
  // Xử lý thay đổi dữ liệu nhập vào
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeAmount = (e) => {
    setFormAmount({ ...formAmount, [e.target.name]: e.target.value });
  };

  // Xử lý gửi form đăng ký
  const handleSubmit = (e) => {
    e.preventDefault();
  
    try {
      if (!validateName(formData.name)) {
        throw new Error("Tên không hợp lệ! Chỉ được chứa chữ cái.");
      }
  
      if (!validateLicensePlate(formData.licensePlate)) {
        throw new Error("Biển số xe không hợp lệ!");
      }
      if (!formData.typeVehicle){
        throw new Error("Loại xe bị bỏ trống");
      }
  
      alert("Dữ liệu đăng ký thẻ:\n" + JSON.stringify(formData, null, 2));
      setShowForm(false);
      setShowAmountForm(true);
  
    } catch (error) {
      alert(error.message);
    }
  };
  

  // Xử lý gửi form nhập số tiền
  const handleAmount = (e) => {
    e.preventDefault();
    alert("Dữ liệu cuối" + JSON.stringify(formAmount, null, 2) + JSON.stringify(formData,null,2));
   
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main_content}>
        <ButtonGroup
          onRegister={() =>{
              setShowForm(true);
              setShowAmountForm(false);
              setFormData({name: "", idName: "", licensePlate: "", typeVehicle: "", brandVehicle: "", colorVehicle: ""});
              setFormAmount({ amount: "", idCard: "", byPay: "" });
            } 
          }
          onRenew={() => alert("Mở form gia hạn")}
          onList={() => alert("Xem danh sách")}
          onEdit={() => alert("Mở form sửa đổi")}
        />
        
        {/* Form đăng ký thẻ */}
        {showForm && (
          <RegisterCard formData={formData} onChange={handleChange} onSubmit={handleSubmit} setFormData={setFormData} />
        )}

        {/* Form nhập số tiền, chỉ hiển thị khi đã gửi form đăng ký */}
        {showAmountForm && (
          <Submit formAmount={formAmount} formData={formData} onChange={handleChangeAmount} onSubmit={handleAmount} setFormAmount={setFormAmount}/>
        )}
      </div>
    </div>
  );
}
