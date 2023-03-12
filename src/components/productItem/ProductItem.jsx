import "./ProductItem.scss";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddCard } from "../../redux/actions/CardActions";
function ProductItem(props) {
  const { name, price, image, id, t, product } = props;

  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="float-end me-1 fs-4">
        <AiFillHeart
          className={like ? "text-danger" : "text-white"}
          onClick={() => setLike(!like)}
        />
      </div>
      <Link to={`/productdetails/${id}`}>
        <img className="product-img" src={image} alt={name} />
      </Link>

      <div className="about">
        <p className="product-name text-center">{name.substr(0, 25)}</p>
        <p className="stars">
          <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
          <AiFillStar />
        </p>
        <span className="price">{price} AZN</span>
        <div
          onClick={() => dispatch(AddCard(product))}
          className="btn btn-secondary mt-2 text-white"
          style={{ paddingLeft: 50, paddingRight: 50 }}
        >
          {t("Add to card")}
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(ProductItem);
