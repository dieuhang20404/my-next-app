// pages/price-setting.js
import Sidebar from "../components/Sidebar"; 
import { useState } from "react";
import styles from "../styles/dashboard.module.css"; 

export default function PriceSetting() {
  const [prices, setPrices] = useState([
    {
      id: 1,
      vehicleType: "Xe đạp",
      dayPrice: 1000,
      nightPrice: 1000,
      monthPrice: 25000,
    },
    {
      id: 2,
      vehicleType: "Xe số",
      dayPrice: 3000,
      nightPrice: 4000,
      monthPrice: 120000,
    },
    {
      id: 3,
      vehicleType: "Xe tay ga",
      dayPrice: 4000,
      nightPrice: 5000,
      monthPrice: 150000,
    },
  ]);

  const [newPrice, setNewPrice] = useState({
    vehicleType: "",
    dayPrice: "",
    nightPrice: "",
    monthPrice: "",
  });

  const [showForm, setShowForm] = useState(false);

  const handleAddPrice = () => {
    const newPriceEntry = {
      id: prices.length + 1,
      vehicleType: newPrice.vehicleType,
      dayPrice: parseInt(newPrice.dayPrice),
      nightPrice: parseInt(newPrice.nightPrice),
      monthPrice: parseInt(newPrice.monthPrice),
    };
    setPrices([...prices, newPriceEntry]);
    setShowForm(false); // Hide form after adding
    setNewPrice({
      vehicleType: "",
      dayPrice: "",
      nightPrice: "",
      monthPrice: "",
    }); // Reset form
  };

  const handleChange = (e) => {
    setNewPrice({
      ...newPrice,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditPrice = (id) => {
    const newPrices = [...prices];
    const priceIndex = newPrices.findIndex((price) => price.id === id);
    if (priceIndex !== -1) {
      newPrices[priceIndex] = {
        ...newPrices[priceIndex],
        dayPrice: prompt("Nhập giá Ngày", newPrices[priceIndex].dayPrice),
        nightPrice: prompt("Nhập giá Đêm", newPrices[priceIndex].nightPrice),
        monthPrice: prompt("Nhập giá Tháng", newPrices[priceIndex].monthPrice),
      };
      setPrices(newPrices);
    }
  };

  const handleDeletePrice = (id) => {
    const newPrices = prices.filter((price) => price.id !== id);
    setPrices(newPrices);
  };

  return (
    <div className={styles.priceSetting__container}>
        
      <div className={styles.priceSetting__content}>
        <h2 className={styles.priceSetting__title}>Thiết lập giá vé</h2>

        <div className={styles.priceSetting__buttons}>
          <button
            className={styles.priceSetting__button}
            onClick={() => setShowForm(!showForm)} // Toggle form visibility
          >
            Thêm Giá Vé
          </button>
        </div>

        {showForm && (
          <div className={styles.addPriceForm}>
            <select
              name="vehicleType"
              value={newPrice.vehicleType}
              onChange={handleChange}
              className={styles.dropdown}
            >
              <option value="">Chọn Loại Xe</option>
              <option value="Xe đạp">Xe đạp</option>
              <option value="Xe số">Xe số</option>
              <option value="Xe tay ga">Xe tay ga</option>
            </select>
            <input
              type="number"
              name="dayPrice"
              value={newPrice.dayPrice}
              onChange={handleChange}
              placeholder="Giá Ngày"
              className={styles.input}
            />
            <input
              type="number"
              name="nightPrice"
              value={newPrice.nightPrice}
              onChange={handleChange}
              placeholder="Giá Đêm"
              className={styles.input}
            />
            <input
              type="number"
              name="monthPrice"
              value={newPrice.monthPrice}
              onChange={handleChange}
              placeholder="Giá Tháng"
              className={styles.input}
            />
            <button onClick={handleAddPrice} className={styles.addButton}>Thêm</button>
          </div>
        )}

        <div className={styles.priceSetting__list}>
          <table className={styles.priceSetting__table}>
            <thead>
              <tr>
                <th className={styles.priceSetting__tableHeader}>Loại Xe</th>
                <th className={styles.priceSetting__tableHeader}>Ngày</th>
                <th className={styles.priceSetting__tableHeader}>Đêm</th>
                <th className={styles.priceSetting__tableHeader}>Tháng</th>
                <th className={styles.priceSetting__tableHeader}>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((price) => (
                <tr key={price.id} className={styles.priceSetting__tableRow}>
                  <td className={styles.priceSetting__tableData}>{price.vehicleType}</td>
                  <td className={styles.priceSetting__tableData}>{price.dayPrice}</td>
                  <td className={styles.priceSetting__tableData}>{price.nightPrice}</td>
                  <td className={styles.priceSetting__tableData}>{price.monthPrice}</td>
                  <td className={styles.priceSetting__tableData}>
                    <button
                      className={styles.priceSetting__actionButton}
                      onClick={() => handleEditPrice(price.id)}
                    >
                      Sửa
                    </button>
                    <button
                      className={styles.priceSetting__deleteButton}
                      onClick={() => handleDeletePrice(price.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
