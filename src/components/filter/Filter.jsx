import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { categoriesAction } from "../../redux/actions/CategoryActions";
import { productsAction, productsActionFilter } from "../../redux/actions/ProductActions";

function Filter(props) {
  const { t } = props;
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(categoriesAction());
  }, [dispatch]);

  const getCategory=(category)=>{
    if(category==="All")
     dispatch(productsAction())
     else
    dispatch(productsActionFilter(category));
  }
  return (
    <div className="container">
      <div style={{ float: "right" }}>
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">
            {t("Filter")}
          </label>
          <select onChange={(e)=>getCategory(e.target.value)} class="form-select" id="inputGroupSelect01">
            <option value="All" selected>
              ALL
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>{category.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Filter);
