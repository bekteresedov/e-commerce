import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFoundPage from "../../pages/NotFoundPage";
import { productsAction } from "../../redux/actions/ProductActions";
import ProductItem from "../productItem/ProductItem";
import "./ProductList.scss";
function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  return (
    <div>
      <div className="container mt-5" style={{ minHeight: "60vh" }}>
        <div className="items">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.title}
              image={product.image}
              price={product.price}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
