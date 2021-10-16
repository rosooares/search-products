import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export const cardItemDetail = ({
  currency,
  pictures,
  price,
  plain_text,
  sold_quantity,
  title,
}) => {
  const imageURL = pictures?.pop()?.url || "";
  return (
    <div className={styles.item}>
      <div className={styles.product}>
        <div className={styles.image}>
          <img src={imageURL} alt="MELI" />
        </div>
        <div className={styles.infos}>
          <div className={styles.qtd}>Nuevo - {sold_quantity} vendidos </div>
          <div className={styles.title}>{title} </div>
          <div className={styles.price}>
            {currency} {price}
          </div>
          <div className={styles.button}>Comprar</div>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>Descripción del producto</div>
        <div className={styles.text}>{plain_text}</div>
      </div>
    </div>
  );
};

export default cardItemDetail;

cardItemDetail.propTypes = {
  currency: PropTypes.string,
  price: PropTypes.number,
  plain_text: PropTypes.string,
  pictures: PropTypes.array,
  sold_quantity: PropTypes.number,
  title: PropTypes.string,
};
