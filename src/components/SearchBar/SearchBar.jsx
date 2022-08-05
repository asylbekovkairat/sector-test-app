import React from "react";
import css from "./Search.module.css";
import { useDispatch } from "react-redux";
import { handleSearch } from "../../features/getData/getDataSlice";

function SearchBar() {
  const dispatch = useDispatch();
  return (
    <>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Поиск"
        onChange={(e) => dispatch(handleSearch(e.target.value))}
      />
      <img className={css.search_icon} src="/search.svg" alt="search" />

      {/* <div className="container">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <form className="navbar-form">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    name="search"
                    placeholder="Location"
                  />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default SearchBar;
