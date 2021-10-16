import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import ItemDetail from "../../components/ItemDetail/container";

const ItemDetailPage = () => {
  const { query, push } = useRouter();
  return (
    <>
      <Header push={push} />
      <ItemDetail query={query} />
    </>
  );
};

export default ItemDetailPage;
