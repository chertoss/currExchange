import React from "react";
import { useSelector } from "react-redux";

import { CurrencyPairs } from "../../types";
import { currencyConvert } from "../../utils";
import { selectLatestCourses } from "../../ducks/latest";
import {
  Wrapper,
  Inner,
  Header,
  Flex,
  FlexCol,
  Input,
  Select,
  ResultText,
} from "../../styles";

interface CurrencyExchangeProps {
  currencyList?: CurrencyPairs;
  base?: number;
}

export const CurrencyExchange: React.FC<CurrencyExchangeProps> = ({
  currencyList,
  base,
}) => {
  const [selectedCurrency, setSelectedCurrency] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [converted, setConverted] = React.useState(0);
  const { data: pairs } = useSelector(selectLatestCourses);

  const renderOptions = () => {
    if (currencyList) {
      return Object.keys(currencyList).map((item) => (
        <option key={currencyList[item]}>{item}</option>
      ));
    }

    return null;
  };

  const handleChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.currentTarget.value);
  };

  const handleConvert = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  React.useEffect(() => {
    if (currencyList) {
      setSelectedCurrency(Object.keys(currencyList)[0]);
    }
  }, [currencyList]);

  React.useEffect(() => {
    if (selectedCurrency || inputValue) {
      const converted = currencyConvert(
        +inputValue,
        base,
        pairs?.rates[selectedCurrency]
      );
      setConverted(converted);
    }
  }, [selectedCurrency, inputValue]);

  return (
    <Wrapper>
      <Inner>
        <Header align="center" mb={15}>
          Конвертер валют
        </Header>
        <Flex>
          <FlexCol>
            <Input
              type="number"
              placeholder="Введите количество рублей"
              onChange={handleConvert}
            />
          </FlexCol>
          <FlexCol>
            <Select onChange={handleChangeCurrency}>{renderOptions()}</Select>
          </FlexCol>
          <FlexCol>
            <ResultText>{`${
              inputValue ? converted : 0
            } ${selectedCurrency}`}</ResultText>
          </FlexCol>
        </Flex>
      </Inner>
    </Wrapper>
  );
};
