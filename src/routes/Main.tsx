import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCurrencyList, selectCurrencies } from "../ducks/currencyList";
import { getLatestCourses, selectLatestCourses } from "../ducks/latest";

import CurrencyExchange from "../components/CurrencyExchange";
import CurrencyTable from "../components/CurrencyTable";

const Main = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectCurrencies);
  const { data: pairs } = useSelector(selectLatestCourses);

  React.useEffect(() => {
    dispatch(getCurrencyList());
    dispatch(getLatestCourses());
  }, []);

  return (
    <>
      <CurrencyExchange currencyList={data} base={pairs?.rates.RUB} />
      <CurrencyTable pairs={pairs?.rates} />
    </>
  );
};

export default Main;
