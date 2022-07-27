import { combineReducers } from "redux";
import BaiTapDatVeReducer from "../reducers/BaiTapDatVeReducer";
export const rootReducer = combineReducers({
  BaiTapDatVeReducer: BaiTapDatVeReducer,
});
