import React from "react";
import "./styles.css";

type TableRowProps = {
  firstColumnRow: string;
  secondColumnRow: string;
  thirdColumnRow: string;
  index: number;
};

const TableRow = ({
  firstColumnRow,
  secondColumnRow,
  thirdColumnRow,
  index,
}: TableRowProps) => {
  return (
    <tr className={index % 2 === 0 ? "blue" : "gray"} key={firstColumnRow}>
      <td>
        {index} - {firstColumnRow}
      </td>
      <td>{secondColumnRow}</td>
      <td>{thirdColumnRow}</td>
    </tr>
  );
};

export default TableRow;
