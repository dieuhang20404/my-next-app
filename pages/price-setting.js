import PriceSettings from "@/components/PriceSetting";
import React, { useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import Sidebar from "../components/Sidebar";
import RegisterCard from "../components/register-card1"; 
import styles from "../styles/register-card.module.css";
import Submit from "../components/register-card2"; 

export default function PriceSetting() {
    return (
        <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main_content}>
          <PriceSettings />
        </div>
      </div>
        )
}