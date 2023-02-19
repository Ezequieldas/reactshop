import React from "react";
import Header from "../components/Header";
import ProductList from "../containers/ProductList";
import '../styles/Login.scss'

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <ProductList />
    </React.Fragment>
  )
}

export default Home;