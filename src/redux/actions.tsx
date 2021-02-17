// import { Dispatch } from 'redux';
import { DealType } from "../types";

export const CREATE_DEAL = "CREATE_DEAL";
export const REMOVE_DEAL = "REMOVE_DEAL";
export const UPDATE_DEAL = "UPDATE_DEAL";
export const SORT_DEALS = "SORT_DEALS";
export const FETCH_DEALS = "FETCH_DEALS";

export const createDeal = (deal: DealType) => {
  return {
    type: CREATE_DEAL,
    payload: {
      deal,
    },
  };
};

export const removeDeal = (deal: DealType) => {
  return {
    type: REMOVE_DEAL,
    payload: {
      deal,
    },
  };
};

export const updateDeal = (deal: DealType) => {
  return {
    type: UPDATE_DEAL,
    payload: {
      deal,
    },
  };
};

// should probably move to reducer for consistency
export const sortDeals = (header: string, asc: boolean, deals: any[]) => {
  const sorted = [...deals];
  switch (asc) {
    case true:
      sorted.sort((a, b) => a[header].localeCompare(b[header], undefined, {numeric: true}));
      break
    case false:
      sorted.sort((a, b) => b[header].localeCompare(a[header], undefined, {numeric: true}));
      break
    default:
      break
  }

  return {
    type: SORT_DEALS,
    payload: { 
      sorted
    },
  };
};

// export const fetchDeals = () => async (dispatch: Dispatch) => {
//   const res = await fetch("http://localhost:8000/deals");
//   const fetched: DealType[] = await res.json();
//   console.log(fetched)
//   return { 
//     type: FETCH_DEALS,
//     payload: fetched
//   }
// };
