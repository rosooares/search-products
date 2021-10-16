import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles.module.scss";
import CardItemDetail from "../presentation/cardItemDetail";

const ItemDetail = ({ query }) => {
  const [itemDetail, setItemDetail] = useState({});
  const [itemDescription, setItemDescription] = useState({});

  useEffect(() => {
    const apiUrlDetail = "https://api.mercadolibre.com/items/";

    const id = query.id;
    axios.get(`${apiUrlDetail}${id}`).then((response) => {
      setItemDetail(response.data);
    });

    axios.get(`${apiUrlDetail}${id}/description`).then((response) => {
      setItemDescription(response.data);
    });
  }, [query]);

  const { currency_id, price, pictures, title, sold_quantity } = itemDetail;
  const { plain_text } = itemDescription;
  return (
    <div className={styles.content}>
      <CardItemDetail
        currency={currency_id}
        price={price}
        pictures={pictures}
        plain_text={plain_text}
        title={title}
        sold_quantity={sold_quantity}
      />
    </div>
  );
};

export default ItemDetail;
