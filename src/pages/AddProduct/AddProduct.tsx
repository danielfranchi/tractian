import React from "react";
import Form from "../../components/Form/Form";

import styles from "./AddProduct.module.css";

const AddProduct = () => {
  return (
    <div className={styles.div}>
      <h2>Cadastrar Produto</h2>
      <Form toEdit={true} text={"add"} />
    </div>
  );
};

export default AddProduct;
