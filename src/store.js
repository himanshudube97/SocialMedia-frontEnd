import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { blogsReducer, singleBlogReducer } from "./reducers/blogReducer";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    blogs: blogsReducer,
    blog:  singleBlogReducer,
    user: userReducer
  });
  
  let initialState = {};
  
  const middleware = [thunk];
  
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;