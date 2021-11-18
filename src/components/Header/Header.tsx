import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/tractian.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={img} alt="logo" />
      </div>

      <div className={styles.nav}>
        <nav>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"add"}>Novo Produto</Link>
            <Link to={"companies"}>Empresas</Link>
            <Link to={"users"}>Usuarios</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
