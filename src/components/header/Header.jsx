import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import { CiShoppingBasket, CiDark } from "react-icons/ci";
import { GrCloudlinux } from "react-icons/gr";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const [color, setColor] = useState(false);

  const { cards } = useSelector((state) => state.cards);

  useEffect(() => {
    const element = document.getElementById("root");
    if (color) {
      element.style.color = "white";
      element.style.backgroundColor = "black";
    } else {
      element.style.color = "black";
      element.style.backgroundColor = "white";
    }
  }, [color]);

  const getCardSize = () => {
    let size = 0;
    cards.forEach((card) => {
      size += card.quantity;
    });
    return size;
  };

  return (
    <header className="container" style={{ borderBottom: "2px solid #86A3B8" }}>
      <nav class="navbar ">
        <div class="container-fluid">
          <Link
            to="/"
            class="navbar-brand fs-2 text-primary"
            style={{ cursor: "pointer" }}
          >
            <GrCloudlinux />{" "}
          </Link>
          <div class="d-flex flex-row-reverse bd-highlight">
            <Link to={"/card"} class="p-2 bd-highlight nav-link">
              <CiShoppingBasket
                className="fs-2 pointer "
                style={{ cursor: "pointer" }}
              />
              {getCardSize() > 0 && (
                <sup className="fw-bold fs-6 text-dark">{getCardSize()}</sup>
              )}
            </Link>
            <div
              class="p-2 bd-highlight"
              onClick={() => setColor(!color)}
              style={{ cursor: "pointer" }}
            >
              {color ? (
                <MdOutlineLightMode className="fs-2" />
              ) : (
                <CiDark className="fs-2" />
              )}
            </div>
            <div class="p-2 bd-highlight me-">
              <Search />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
