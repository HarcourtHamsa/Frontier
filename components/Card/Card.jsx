import React, { useState } from "react";
import styles from "./Card.module.scss";
import { FiMoreVertical } from "react-icons/fi";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <div className={styles.more_icon} onClick={() => setIsOpen(!isOpen)}>
          <FiMoreVertical size={20} />
        </div>

        <div className={styles.dropdown} data-active={isOpen}>
          <ul>
            <li>Edit Product</li>
            <li>Delete Product</li>
          </ul>
        </div>
      </div>
      <div className={styles.card_body}>
        <p className={styles.product_name}>Play Station 5</p>
        <p className={styles.product_price}>N 500</p>
      </div>
    </div>
  );
};

export default Card;
