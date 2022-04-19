import React from "react";
import { useSelector } from "react-redux";

import { Rates } from "../../types";
import { selectCurrencies } from "../../ducks/currencyList";
import {
  Wrapper,
  Inner,
  Flex,
  FlexItem,
  Header,
  Select,
  TableWrapper,
  Table,
  TableHead,
  TableBody,
  Tr,
} from "../../styles";

interface CurrencyTableProps {
  pairs?: Rates;
}

export const CurrencyTable: React.FC<CurrencyTableProps> = ({ pairs }) => {
  const [baseCurr, setBaseCurr] = React.useState("USD");
  const { data } = useSelector(selectCurrencies);

  const renderRows = () => {
    if (pairs) {
      return Object.keys(pairs).map((item) => (
        <Tr key={item}>
          <td width="50%" onClick={() => setBaseCurr(item)}>{`${item} (${
            data ? data[item] : ""
          })`}</td>
          <td width="50%">{pairs[item] / pairs[baseCurr]}</td>
        </Tr>
      ));
    }
  };

  const handleChangeBaseCurr = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBaseCurr(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <Inner>
        <Flex mb={15}>
          <Header>Курсы валют</Header>
          <FlexItem>
            <span>Базовая валюта</span>
            <Select onChange={handleChangeBaseCurr} ml={10}>
              {Object.keys(pairs || []).map((item) => (
                <option selected={item === baseCurr}>{item}</option>
              ))}
            </Select>
          </FlexItem>
        </Flex>
        <TableWrapper>
          <Table>
            <TableHead>
              <tr>
                <th>
                  <div>Валюта</div>
                </th>
                <th>
                  <div>Курс</div>
                </th>
              </tr>
            </TableHead>
            <TableBody>{renderRows()}</TableBody>
          </Table>
        </TableWrapper>
      </Inner>
    </Wrapper>
  );
};
