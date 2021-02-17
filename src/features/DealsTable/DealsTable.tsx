import React from "react";
import { DealsListType } from "../../types";
import DealsTableRow from "./DealsTableRow/DealsTableRow";
import "./DealsTable.scss";
import SortIcon from "../../assets/SortIcon";

type DealsTableProps = DealsListType;

const DealsTable = (props: DealsTableProps) => {
  const { deals } = props;
  const dealsTableRows = deals.map((deal) => (
    <DealsTableRow key={deal.id} deal={deal} />
  ));
  return (
    <div className="tile">
      <div className="tile--header">Deal Portfolio</div>
      <table className='DealsTable'>
        <thead>
          <tr>
            <th className='DealsTable--headerCell'>Institution <SortIcon/></th>
            <th className='DealsTable--headerCell'>Deal Type <SortIcon/></th>
            <th className='DealsTable--headerCell'>Deal Size <SortIcon/></th>
            <th className='DealsTable--headerCell'>Is Published? <SortIcon/></th>
            <th className='DealsTable--headerCell'>Actions <SortIcon/></th>
          </tr>
        </thead>
        <tbody>{dealsTableRows}</tbody>
      </table>
    </div>
  );
};

export default DealsTable;
