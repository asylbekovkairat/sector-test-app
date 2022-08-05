import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortData, sortDataById } from "../../features/getData/getDataSlice";
import css from "./Table.module.css";

function Table() {
  const mainData = useSelector((state) => state.data.data);
  const search = useSelector((state) => state.data.search);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const pageCount = mainData ? Math.ceil(mainData.length) : 0;
  if (pageCount === null) return null;

  const handleIdSort = () => {
    setActive(!active);
    dispatch(sortDataById({ data: mainData, status: !active }));
  };

  const newMainData = mainData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className={css.id}>
              ID
              <img src="/arrow.svg" alt="arrow" onClick={handleIdSort} />
            </th>
            <th className={css.title}>
              Заголовок{" "}
              <img
                src="/arrow.svg"
                alt="arrow"
                onClick={() => dispatch(sortData())}
              />
            </th>
            <th className={css.desc}>
              Описание{" "}
              <img
                src="/arrow.svg"
                alt="arrow"
                onClick={() => dispatch(sortData(mainData))}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {newMainData === false ? (
            <h1>Something went wrong ...</h1>
          ) : (
            newMainData.map((item) => (
              <tr key={item.id}>
                <th className={css.id}>{item.id}</th>
                <td className={css.title_td}>{item.title}</td>
                <td className={css.desc_td}>{item.body}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
