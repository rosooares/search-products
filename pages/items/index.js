import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Items from "../../components/Items/container";

const ItemsPage = () => {
  const { query, push } = useRouter();
  return (
    <>
      <Header push={push} />
      <Items query={query} push={push} />
    </>
  );
};

export default ItemsPage;
