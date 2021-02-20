import { createStore, combineReducers } from "redux";
import { dataReducer } from "./redux/dataReducer";
// import { DATA_TYPE } from "./redux/types";

const rootReducer = combineReducers({
  data: dataReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// function reducer(state, action) {
//   return state;
// }

// store.dispatch({
//   type: DATA_TYPE,
//   field: "email",
//   value: "name@mail.com",
// });
