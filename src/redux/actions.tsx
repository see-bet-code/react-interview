import { DealType } from "../types";

export const CREATE_DEAL = "CREATE_DEAL";
export const REMOVE_DEAL = "REMOVE_DEAL";
export const UPDATE_DEAL = "UPDATE_DEAL";

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
  console.log(deal)
  return {
    type: UPDATE_DEAL,
    payload: {
      deal,
    },
  };
};
