import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export const CardItem = ({
  address,
  currency,
  id,
  image,
  price,
  title,
  push,
}) => {
  const handleToDetails = (id) => {
    push({
      pathname: `/items/${id}`,
    });
  };

  return (
    <div className={styles.item}>
      <div className={styles.img} onClick={() => handleToDetails(id)}>
        <img src={image} alt="MELI" />
      </div>
      <div className={styles.description} onClick={() => handleToDetails(id)}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>
          {currency} {price}
        </div>
      </div>
      <div className={styles.city}> {address.city_name} </div>
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  address: PropTypes.object,
  currency: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  push: PropTypes.func,
  title: PropTypes.string,
};
