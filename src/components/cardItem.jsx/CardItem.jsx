import React from "react";
import { withTranslation } from "react-i18next";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DecreaseQuantity,
  DeleteAllCards,
  DeleteCard,
  IncreaseQuantity,
} from "../../redux/actions/CardActions";
import { ImCancelCircle } from "react-icons/im";
import NotFoundPage from "../../pages/NotFoundPage";
function CardItem(props) {
  const { t } = props;
  const { cards } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let price = 0;
    cards.forEach((card) => {
      price += card.quantity * card.price;
    });

    return price.toFixed(2);
  };

  return (
    <div className="container p-5">
      {cards.length ? (
        <div>
          <Link to={"/"} className="float-end fs-3 text-danger">
            <ImCancelCircle />
          </Link>

          <h1 className="text-center mb-3 mt-3 fw-bold text-info">{t("Basket")}</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col text-danger"><span className="text-info">{t("Product")}</span></th>
                <th scope="col"><span className="text-info">{t("Quantity")}</span></th>
                <th scope="col"><span className="text-info">{t("Price")}</span></th>
              </tr>
            </thead>
            <tbody style={{ height: "10vh" }}>
              {cards.map((card, i) => (
                <tr>
                  <th scope="row">
                    <GiCancel
                      className="fs-4 text-danger"
                      onClick={() => dispatch(DeleteCard(card.id))}
                    />
                    <img
                      className="ms-4"
                      style={{ width: 40, height: 55 }}
                      src={card.image}
                      alt={card.name}
                    />
                    <span className="ms-5 text-center text-info">
                      {card.name.substr(0, 5)}{" "}
                    </span>
                  </th>
                  <td>
                    <div className="fs-5 mt-2 text-info ">
                      <AiOutlineMinusCircle
                        onClick={() => dispatch(DecreaseQuantity(i))}
                      />
                      <span>{card.quantity}</span>
                      <AiOutlinePlusCircle
                        onClick={() => dispatch(IncreaseQuantity(i))}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="mt-2 text-info">{card.price} AZN</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 fs-3 fw-bold text-dark">
            {t("Amount")}: {totalPrice()} Azn
          </div>
          <div className="text-center mt-4">
            <Link
              to={"/"}
              onClick={() => dispatch(DeleteAllCards())}
              className="btn btn-danger me-5"
            >
              {t("Cancel")}
            </Link>
            <Link
              to={"/success"}
              onClick={() => dispatch(DeleteAllCards())}
              className="btn btn-warning"
            >
              {t("Confirm")}
            </Link>
          </div>
        </div>
      ) : (
        <NotFoundPage errorMessage="No Order" />
      )}
    </div>
  );
}

export default withTranslation()(CardItem);
