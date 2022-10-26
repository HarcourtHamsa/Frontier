import React, { useEffect, useState,useRef } from "react";
import Layout from "../../components/Layout/Layout";
import InputField from "../../components/InputField/InputField";
import styles from "./app.module.scss";
import Button from "../../components/Button/Button";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const store = document
  //   .querySelector("#store_card_form_bg")

  //   store.addEventListener('click', () => {
  //     setIsOpen(!isOpen)
  //   })
  // }, [])

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
          >
          </div>
          <div className={styles.store_card_form} data-active={isOpen}>
            <form>
              <h1 className={styles.title}>Create a store</h1>
              <InputField
                type="text"
                name="store_name"
                id="store_name"
                value=""
                placeholder="Enter store name"
              />
              <Button label="Create" theme="green" />
            </form>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Index;
