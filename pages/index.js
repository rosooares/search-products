import React from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Home from "../components/Home";

const App = () => {
  const { push } = useRouter();
  return (
    <>
      <Header push={push} />
      <Home />
    </>
  );
};

export default App;
