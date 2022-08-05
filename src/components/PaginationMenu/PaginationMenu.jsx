import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../../features/getData/getDataSlice";
import css from "./Pagination.module.css";
function PaginationMenu() {
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.data.data);

  const pagination = (current) => {
    dispatch(getData(current));
  };

  const pageCount = mainData ? Math.ceil(mainData.length) : 0;
  if (pageCount === null) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <>
      <nav className={css.pagination_nav}>
        <ul className={css.pagination}>
          {pages.map((page, index) => (
            <li key={page} onClick={() => pagination(index)}>
              {page}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default PaginationMenu;
