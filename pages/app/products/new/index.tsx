import React from "react";
import { useFormik } from "formik";
import InputField from "../../../../components/InputField/InputField";
import Layout from "../../../../components/Layout/Layout";
import styles from "./new.module.scss";
import Button from "../../../../components/Button/Button";
import { product } from "../../../../lib/auth";
import { useRouter } from "next/router";

const NewProduct = () => {
  const router = useRouter();

  // const formik = useFormik({
  //   initialValues: {
  //     image: "",
  //     product_name: "",
  //     product_price: "",
  //   },

  //   onSubmit: async (values) => {
  //     product(values)
  //       // .then(({ data }) => router.push("/products"))
  //       .catch((err) => console.log(err));
  //   },
  // });

  function handleSubmit(){

  }

  function handleChange(){
    
  }
  return (
    <div>
      <Layout>
        <div className={styles.main}>
          <h3>Create New Product</h3>

          <form onSubmit={handleSubmit}>
            <InputField
              type="file"
              label="Product Image"
              onChange={handleChange}
              name="image"
              id="image"
              value={""}
            />
            <InputField
              type="text"
              label="Product Name"
              placeholder="Enter the product name"
              onChange={handleChange}
              name="product_name"
              id="product_name"
              value={""}
            />
            <InputField
              type="text"
              label="Product Price"
              placeholder="Enter the price for the product"
              onChange={handleChange}
              name="product_price"
              id="product_price"
              value={""}
            />
            <textarea placeholder="Describe the product" />

            <Button label="Create product" theme="green" type="submit" />
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default NewProduct;
