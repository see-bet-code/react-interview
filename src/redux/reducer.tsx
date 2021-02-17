import { CREATE_DEAL, REMOVE_DEAL, UPDATE_DEAL, SORT_DEALS} from "./actions";
import { DealType, DealsListType } from "../types";

let nextDealId = 3;

export const initialState: DealsListType = {
  deals: [
    {
      id: 1,
      institution: "LS Credit Union",
      dealSize: "1000000",
      dealType: "Consumer Auto",
      isPublished: true,
    },
    {
      id: 2,
      institution: "LS Credit Union",
      dealSize: "5000000",
      dealType: "Real Estate",
      isPublished: false,
    },
  ],
};

type ActionType = {
  type: string;
  payload: { deal: DealType } & {sorted: DealType[]} & {fetched: DealType[]};
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CREATE_DEAL:
      return {
        ...state,
        deals: [...state.deals, { ...action.payload.deal, id: nextDealId++ }],
      };
    case REMOVE_DEAL:
      return {
        ...state,
        deals: state.deals.filter(deal => deal.id !== action.payload.deal.id),
      };
    case UPDATE_DEAL:
      return {
        ...state,
        deals: state.deals.map(deal => deal.id === action.payload.deal.id ? action.payload.deal : deal),
      };
    case SORT_DEALS:
      return {
        ...state,
        deals: [...action.payload.sorted],
      };
    // case FETCH_DEALS:
    //   return {
    //     ...state,
    //     deals: [...state.deals, ...action.payload.fetched],
    //   };
    default:
      return state;
  }
};
