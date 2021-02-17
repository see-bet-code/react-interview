import React, {useState} from "react";
import noop from "lodash/noop";
import { DealType } from "../../types";
import DealsTableRow from "./DealsTableRow/DealsTableRow";
import "./DealsTable.scss";
import SortIcon from "../../assets/SortIcon";

type DealsTableProps = {
  deals: DealType[];
  onSortDeals: (header: string, asc: boolean, deals: DealType[]) => any;
};

const DealsTable = (props: DealsTableProps) => {
  const { deals, onSortDeals = noop } = props;
  const [asc, setAsc] = useState(false);
  const [selected, setSelected] = useState("");

  const dealsTableRows = deals.map((deal) => (
    <DealsTableRow key={deal.id} deal={deal} />
  ));

  const handleClick = (e: React.SyntheticEvent) => {
    const innerTxt = (e.target as HTMLElement).innerText
    setSelected(innerTxt)
    let header
    switch (innerTxt) {
      case "Institution":
        header = "institution"
        break
      case "Deal Type":
        header = "dealType"
        break
      case "Deal Size":
        header = "dealSize"
        break
      default:
        break
    }
    if (header) {
      onSortDeals(header, asc, deals)
      setAsc(!asc)
    }
    
  }

  const setIcon = (header:string) => {
    if (selected === header) {
      if (asc) {
        return <SortIcon direction={ "up" }/>
      }
      return <SortIcon direction={ "down" }/>
    }
    // return <SortIcon />
  }


  return (
    <div className="tile">
      <div className="tile--header">Deal Portfolio</div>
      <table className='DealsTable'>
        <thead>
          <tr>
            <th className='DealsTable--headerCell' onClick={handleClick}>
              Institution
              {setIcon("Institution")}
            </th>
            <th className='DealsTable--headerCell' onClick={handleClick}>
              Deal Type
              {setIcon("Deal Type")}
            </th>
            <th className='DealsTable--headerCell' onClick={handleClick}>
              Deal Size
              {setIcon("Deal Size")}
            </th>
            <th className='DealsTable--headerCell' onClick={handleClick}>Is Published?</th>
            <th className='DealsTable--headerCell'>Actions </th>
          </tr>
        </thead>
        <tbody>{dealsTableRows}</tbody>
      </table>
    </div>
  );
};

export default DealsTable;
