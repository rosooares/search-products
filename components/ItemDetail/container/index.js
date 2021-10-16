import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles.module.scss";
import CardItemDetail from "../presentation/cardItemDetail";

const ItemDetail = ({ query }) => {
  const [itemDetail, setItemDetail] = useState({});
  const [itemDescription, setItemDescription] = useState({});
  const id = query.id;

  useEffect(() => {
    const apiUrlDetail = "https://api.mercadolibre.com/items/";
    if (id) {
      axios.get(`${apiUrlDetail}${id}`).then((response) => {
        setItemDetail(response.data);
      });

      axios.get(`${apiUrlDetail}${id}/description`).then((response) => {
        setItemDescription(response.data);
      });
    }
  }, [id]);

  const { currency_id, price, title, sold_quantity, pictures } = itemDetail;
  const { plain_text } = itemDescription;
  const image = pictures?.pop()?.url || "";

  return (
    <div className={styles.content}>
      <CardItemDetail
        currency={currency_id}
        price={price}
        image={image}
        plain_text={plain_text}
        title={title}
        sold_quantity={sold_quantity}
      />
    </div>
  );
};

export default ItemDetail;
