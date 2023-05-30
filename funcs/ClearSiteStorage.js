import {
  ClearCookies,
  ClearIndexedDb,
  ClearLocalStorage,
  ClearSessionStorage,
} from "./";

const ClearSiteStorage = () => {
  ClearCookies();
  ClearIndexedDb();
  ClearLocalStorage();
  ClearSessionStorage();
};

export default ClearSiteStorage;