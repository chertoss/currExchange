import { combineReducers } from "redux";

import currencyList, {
  moduleName as currenciesModuleName,
} from "../ducks/currencyList";
import latestCourses, {
  moduleName as latestCoursesModuleName,
} from "../ducks/latest";

export default combineReducers({
  [currenciesModuleName]: currencyList,
  [latestCoursesModuleName]: latestCourses,
});
