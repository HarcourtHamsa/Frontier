import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import InputField from "../../components/InputField/InputField";
import styles from "./app.module.scss";
import Button from "../../components/Button/Button";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newStoreName, setNewStoreName] = useState("");

  const handleStoreName = (e) => {
    setNewStoreName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newStoreName);
  };

  return (
    <div>
      <Layout>
        <main className={styles.dashboard}>
          <div
            className={styles.add_store_card}
            onClick={() => setIsOpen(!isOpen)}
          >
            +
          </div>

          <div
            className={styles.store_card_form_bg}
            id="store_card_form_bg"
            data-active={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          ></div>
          <div className={styles.store_card_form} data-active={isOpen}>
            <h2 className={styles.title}>Create a store</h2>
            <form onSubmit={handleSubmit}>
              <InputField
                type="text"
                name="store_name"
                id="store_name"
                value={newStoreName}
                onChange={handleStoreName}
                placeholder="Enter store name"
              />
              <Button label="Create store" theme="green" type="submit" />
            </form>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Index;
