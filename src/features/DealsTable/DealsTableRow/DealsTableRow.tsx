import React from "react";
import { connect } from "react-redux";
import { removeDeal, updateDeal } from "../../../redux/actions";
import { DealType } from "../../../types";

import "./DealsTableRow.scss";

const currencyAmountToString = (amount: string) => {
  return `$${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

type DealsTableRowProps = {
  deal: DealType;
  onRemoveDeal: (deal: DealType) => any;
  onUpdateDeal: (deal: DealType) => any;
};

const DealsTableRow = (props: DealsTableRowProps) => {
  const {
    deal: { institution, dealType, dealSize, isPublished },
  } = props;

  const handleRemoveDeal = () => {
    props.onRemoveDeal(props.deal);
  };

  const handlePublishDeal = () => {
    props.onUpdateDeal({...props.deal, isPublished: true});
  };

  return (
    <tr className='DealsTableRow' onClick={console.log}>
      <td className='DealsTableRow--cell'>{institution}</td>
      <td className='DealsTableRow--cell'>{dealType}</td>
      <td className='DealsTableRow--cell'>
        {currencyAmountToString(dealSize)}
      </td>
      <td className='DealsTableRow--cell'>{isPublished ? "Yes" : "No"}</td>
      <td className='DealsTableRow--cell'>
      <button className='DealsTableRow--removeButton' onClick={handleRemoveDeal}>
        Remove Deal
      </button>
      <button className='DealsTableRow--button' disabled={isPublished} onClick={handlePublishDeal}>
        Publish
      </button>
      </td>
    </tr>
  );
};

type DispatchType = (arg0: {
  type: string;
  payload: { deal: DealType };
}) => any;

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onRemoveDeal: (deal: DealType) => dispatch(removeDeal(deal)),
  onUpdateDeal: (deal: DealType) => dispatch(updateDeal(deal)),
});

export default connect(undefined, mapDispatchToProps)(DealsTableRow);
