import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { productActionDetails } from "../redux/actions/ProductActions";
import { ImCancelCircle } from "react-icons/im";
import Header from "../components/header/Header";
import { AddCard } from "../redux/actions/CardActions";
function ProductDetailsPage(props) {
  const { id } = useParams();
  const { t } = props;

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productActionDetails(id));
  }, [dispatch]);
  console.log(product);

  return (
    <div>
      <Header/>
    <div className="container mt-5">
      <div className="detail row">
        <div className="col">
          <img
            style={{
              width: "300px",
              height: "400px",
              marginTop: "20px",
              marginBottom: "20px",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              borderRadius: "5px",
            }}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="col mt-3">
          <div className="fw-bold">
            {t("Title")}: {product?.title}
          </div>

          <div className="mt-1">
            {t("Category")}: {product?.category}
          </div>
          <div className="mt-1">
            {t("Rate")}: {product?.rating?.rate} - {t("Stock")} :{" "}
            {product?.rating?.count}
          </div>
          <div className="fw-bold mt-1">
            {t("Price")}: {product?.price}
          </div>
          <p className=" mt-5">
            <span className="fw-bold"> {t("Description")}</span>:{" "}
            {product?.description}
          </p>
          <button
            className="btn btn-secondary mt-2 text-white"
            style={{ paddingLeft: 50, paddingRight: 50 }}
            onClick={()=>dispatch(AddCard(product))}
          >
            {t("Add to card")}
          </button>
        </div>

        <div className="col">
          <Link to="/" className="float-end me-5">
            <ImCancelCircle className="fs-3 text-danger" />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default withTranslation()(ProductDetailsPage);
