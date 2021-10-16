import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./styles.module.scss";

const Header = ({ push }) => {
  const [input, setInput] = useState({ search: "" });

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInput({ search: value });
  };

  const searchProduct = ({ search }) => {
    push({
      pathname: "/items",
      query: {
        search,
      },
    });
  };

  const goToHome = () => {
    push({
      pathname: "/",
    });
  };

  return (
    <div className={styles.header}>
      <header>
        <div className={styles.logo} onClick={goToHome}>
          <img
            src="https://seeklogo.com/images/M/mercado-livre-logo-D1DC52B13E-seeklogo.com.png"
            alt="MELI"
          />
        </div>
        <div className={styles.field}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Nunca dejes de buscar"
            onChange={handleInputChange}
            value={input.search}
          />
          <button
            onClick={() => {
              searchProduct(input);
              setInput({ search: "" });
            }}
          >
            <FiSearch />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
