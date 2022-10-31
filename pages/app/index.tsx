import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import InputField from "../../components/InputField/InputField";
import styles from "./app.module.scss";
import { IoIosMore } from "react-icons/io";
import Button from "../../components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { json } from "stream/consumers";
import { WithAuth } from "../../HOCs/WithAuth";

const Index = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [newStoreName, setNewStoreName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stores, setStores] = useState([]);

  const notify = () => toast("New store created!");

  const handleStoreName = (e) => {
    setNewStoreName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post("/api/store", { name: newStoreName });
      console.log(res);
      notify();

      setTimeout(() => {
        setIsOpen(false);
      }, 1000 * 3);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const redirect = (storeName, storeID) => {
    router.push({
      pathname: "/app/products",
      query: {
        storeName,
        storeID,
      },
    });
  };

  useEffect(() => {
    async function getStores() {
      const { data } = await axios.get("/api/stores");
      return data;
    }

    getStores()
      .then(({ data }) => {
        setStores(data);
      })
      .catch((error) => console.log(error));
  }, [stores, setStores]);

  return (
    <div>
      <ToastContainer
        position="top-center"
        theme="light"
        hideProgressBar={true}
      />

      <Layout>
        <main className={styles.dashboard}>
          <div className={styles.cards}>
            <div
              className={styles.add_store_card}
              onClick={() => setIsOpen(!isOpen)}
            >
              +
            </div>
            {stores?.map((store, index) => {
              return (
                <div
                  className={styles.store_card}
                  onClick={() => redirect(store.name, store.id)}
                  key={index}
                >
                  <div className={styles.inner}>
                    <p>{store.name}</p>
                    <IoIosMore size={30} color="white" />
                  </div>
                </div>
              );
            })}
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
              <Button
                label={isLoading ? "Loading..." : "Create store"}
                theme="green"
                type="submit"
              />
            </form>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export const getServerSideProps = WithAuth(async (context) => {
  return { props: {} };
});

export default Index;
