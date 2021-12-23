import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/products");
        console.log(res);
      } catch (error) {
        // console.log(error);
      }
    };
    getProducts();
  }, [cat]);
  // console.log(cat, filter, sort);
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
