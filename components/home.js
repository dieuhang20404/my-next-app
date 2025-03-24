import React, { useState } from "react";
import styles from "../styles/form.module.css";
import HomePicture from "../components/camera";
const ParkingSystem = () => {
  const [vehicleList, setVehicleList] = useState([]);
  const [cardList, setCardList] = useState([{ id: "C001", status: "active" }]);
  const [mode, setMode] = useState("entry"); // "entry" (Xe vào) hoặc "exit" (Xe ra)


  const [formData, setFormData] = useState({
    idCard: "",
    name: "",
    licensePlate: "",
    vehicleType: "car",
    entryTime: new Date().toISOString().slice(0, 16),
    exitTime: "",
    fee: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Nếu nhập biển số xe vào form xe ra -> Tự động điền thông tin
    if (mode === "exit" && name === "licensePlate") {
      const vehicle = vehicleList.find((v) => v.licensePlate === value);
      if (vehicle) {
        setFormData({
          ...vehicle,
          exitTime: new Date().toISOString().slice(0, 16),
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "entry") {
      // Xử lý xe vào
      const availableCard = cardList.find((card) => card.status === "active");
      if (!availableCard) {
        alert("Không còn thẻ giữ xe khả dụng!");
        return;
      }

      const newVehicle = { ...formData, idCard: availableCard.id };
      setVehicleList([...vehicleList, newVehicle]);

      setCardList((prevCards) =>
        prevCards.map((card) =>
          card.id === availableCard.id ? { ...card, status: "inactive" } : card
        )
      );
    } else {
      // Xử lý xe ra
      setVehicleList(vehicleList.filter((v) => v.licensePlate !== formData.licensePlate));
      setCardList((prevCards) =>
        prevCards.map((card) =>
          card.id === formData.idCard ? { ...card, status: "active" } : card
        )
      );
    }

    // Reset form
    setFormData({
      idCard: "",
      name: "",
      licensePlate: "",
      vehicleType: "car",
      entryTime: new Date().toISOString().slice(0, 16),
      exitTime: "",
      fee: "",
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.form_container} >
                {mode === "exit" && ( 
                  <div className={styles.form_group} style={{ backgroundColor: "yellow" }}>
                    <label htmlFor="fee">Thành tiền</label>
                    <input type="text" id="fee" name="fee" value={formData.fee} disabled />
                  </div>
                )}
          <div className={styles.button_group}>
            <button className={`${styles.switch_button} ${mode === "entry" ? styles.active : ""}`} onClick={() => setMode("entry")}>XE VÀO</button>
            <button className={`${styles.switch_button} ${mode === "exit" ? styles.active : ""}`} onClick={() => setMode("exit")}>XE RA</button>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form_group}>
              <label htmlFor="name">Chủ xe</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="licensePlate">Biển số xe</label>
              <input
                type="text"
                id="licensePlate"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="vehicleType">Loại xe</label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
              >
                <option value="bike">Xe đạp</option>
                <option value="moto">Xe máy</option>
                <option value="sh">Xe tay ga</option>
              </select>
            </div>

            {mode === "entry" && (
              <div className={styles.form_group}>
                <label htmlFor="entryTime">Thời gian vào</label>
                <input
                  type="datetime-local"
                  id="entryTime"
                  name="entryTime"
                  value={formData.entryTime}
                  disabled
                />
              </div>
            )}

            {mode === "exit" && (
              <>
                <div className={styles.form_group}>
                  <label htmlFor="idCard">Thẻ ID</label>
                  <input type="text" id="idCard" name="idCard" value={formData.idCard} disabled />
                </div>

                <div className={styles.form_group}>
                  <label htmlFor="entryTime">Thời gian vào</label>
                  <input type="datetime-local" id="entryTime" name="entryTime" value={formData.entryTime} disabled />
                </div>

                <div className={styles.form_group}>
                  <label htmlFor="exitTime">Thời gian ra</label>
                  <input type="datetime-local" id="exitTime" name="exitTime" value={formData.exitTime} disabled />
                </div>

                
              </>
            )}

            <button className={styles.button} type="submit">
              {mode === "entry" ? "🚗 Xe vào" : "🚙 Xe ra"}
            </button>
          </form>

         
        </div>
        <div>
          <HomePicture />
        </div>
      </div>

    </div>
  );
};

export default ParkingSystem;
