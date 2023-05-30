import {
  ClearCookies,
  ClearIndexedDb,
  ClearLocalStorage,
  ClearSessionStorage,
} from "../index.js";

export default function ClearSiteDatas() {
  ClearCookies();
  ClearIndexedDb();
  ClearLocalStorage();
  ClearSessionStorage();
}
