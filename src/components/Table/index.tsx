import React, { ReactNode } from "react";

type TableProps = {
  firstColumnHeader: string;
  secondColumnHeader: string;
  thirdColumnHeader: string;
  children: ReactNode;
};

const Table = ({
  firstColumnHeader,
  secondColumnHeader,
  thirdColumnHeader,
  children,
}: TableProps) => {
  return (
    <table>
      <table>
        <tr>
          <th>{firstColumnHeader}</th>
          <th>{secondColumnHeader}</th>
          <th>{thirdColumnHeader}</th>
        </tr>
        {children}
      </table>
    </table>
  );
};

export default Table;
