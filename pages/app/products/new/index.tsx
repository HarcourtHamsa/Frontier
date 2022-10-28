import React from "react";
import { useFormik } from "formik";
import InputField from "../../../../components/InputField/InputField";
import Layout from "../../../../components/Layout/Layout";
import styles from "./new.module.scss";
import Button from "../../../../components/Button/Button";

const NewProduct = () => {
  const formik = useFormik({
    initialValues: {
      image: "",
      product_name: "",
      product_price: "",
    },

    onSubmit: async (values) => {},
  });
  return (
    <div>
      <Layout>
        <div className={styles.main}>
          <h3>Create New Product</h3>

          <form>
            <InputField
              type="file"
              label="Product Image"
              onChange={formik.handleChange}
              name="image"
              id="image"
              value={formik.values.image}
            />
            <InputField
              type="text"
              label="Product Name"
              placeholder="Enter the product name"
              onChange={formik.handleChange}
              name="product_name"
              id="product_name"
              value={formik.values.product_name}
            />
            <InputField
              type="text"
              label="Product Price"
              placeholder="Enter the price for the product"
              onChange={formik.handleChange}
              name="product_price"
              id="product_price"
              value={formik.values.product_price}
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
