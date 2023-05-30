import ClearCookies from "./funcs/ClearCookies.js";
import ClearIndexedDb from "./funcs/ClearIndexedDb.js";
import ClearLocalStorage from "./funcs/ClearLocalStorage.js";
import ClearSessionStorage from "./funcs/ClearSessionStorage.js";
import ClearSiteDatas from "./funcs/ClearSiteDatas.js";
import Console from "./funcs/Console.js";
import CurrentTimestamp from "./funcs/CurrentTimestamp.js";
import CurrentYear from "./funcs/CurrentYear.js";
import RandomId from "./funcs/RandomId.js";
import RandomNumber from "./funcs/RandomNumber.js";

const utiler = {
  ClearCookies,
  ClearLocalStorage,
  ClearSessionStorage,
  ClearIndexedDb,
  ClearSiteDatas,
  Console,
  CurrentYear,
  CurrentTimestamp,
  RandomId,
  RandomNumber,
};

export {
  ClearCookies,
  ClearLocalStorage,
  ClearSessionStorage,
  ClearIndexedDb,
  ClearSiteDatas,
  Console,
  CurrentYear,
  CurrentTimestamp,
  RandomId,
  RandomNumber,
};

export default utiler;
