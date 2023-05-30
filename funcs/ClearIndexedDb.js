const ClearIndexedDb = async () => {
  const databases = await window.indexedDB.databases();
  for (const database of databases) window.indexedDB.deleteDatabase(database.name);
};

export default ClearIndexedDb;
