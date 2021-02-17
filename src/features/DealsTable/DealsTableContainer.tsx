import { connect } from "react-redux";
import { sortDeals } from '../../redux/actions';
import DealsTable from "./DealsTable";
import { DealsListType, DealType } from "../../types";

const mapStateToProps = (state: DealsListType) => {
  const { deals } = state;
  return {
    deals,
  };
};

type DispatchType = (arg0: {
  type: string;
  payload: { sorted: DealType[] };
}) => any;

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onSortDeals: (header: string, asc: boolean, deals: DealType[]) => dispatch(sortDeals(header, asc, deals)),

});

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);

