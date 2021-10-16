import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles.module.scss";
import { CardItem } from "../presentation/cardItem";

const Items = ({ query, push }) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    const apiUrl = "https://api.mercadolibre.com/sites/MLA/search?q=:";
    const search = query.search;

    axios.get(`${apiUrl}${search}`).then((response) => {
      setItems(response.data);
    });
  }, [query]);

  if (items?.results?.length > 0) {
    return (
      <div className={styles.content}>
        {items.results.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            currency={item.currency_id}
            image={item.thumbnail}
            price={item.price}
            title={item.title}
            address={item.address}
            push={push}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <p> No hay resultados. </p>
    </div>
  );
};

export default Items;
