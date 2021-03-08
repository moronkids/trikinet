/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "redux/reducers/auth";
import project from "redux/reducers/project";
import loading from "redux/reducers/loading";
import detail from "redux/reducers/detail_project";
import task from "redux/reducers/task";
import { POST_SIGNOUT } from "redux/actions/index";
const persistDetailProject = {
  key: "detailProject",
  storage: storage,
};
const appReducer = combineReducers({
  loading: loading,
  auth: auth,
  task: task,
  project: project,
  detail: persistReducer(persistDetailProject, detail),
});
const rootReducer = (state, action) => {
  if (action.type === "POST_SIGNOUT") {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("persist:detailProject");
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
// const rootReducer = combineReducers({
//   loading: loading,
//   auth: auth,
//   task: task,
//   project: project,
//   detail: persistReducer(persistDetailProject, detail),
// });

// export default (state, action) => rootReducer(action.type === "POST_SIGNOUT" ? undefined : state, action);
