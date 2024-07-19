import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
  console.log(' putDb to be implemented');

  //Create a new connection to the database
  const db = await openDB('jate', 1);

  //Create a new transaction to write to the database
  const tx = db.transaction('jate', 'readwrite');

  //Open the database object store
  const store = tx.objectStore('jate');

  //Put the data in the object store
  const request = store.put({ id: 1, jate: content });

  //Wait for the data to be saved
  const result = await request;

  //Return the result
  console.log('Saved', result);
}

export const getDb = async () => {
  console.log(' getDb to be implemented');
  //Create a new connection to the database
  const db = await openDB('jate', 1);

  //Create a new transaction to read from the database
  const tx = db.transaction('jate', 'readonly');

  //Open the database object store
  const store = tx.objectStore('jate');

  //Get the data from the object store
  const request = store.get(1);

  //Wait for the data to be retrieved
  const result = await request;

  //Return the data
  console.log('Loaded', result);
  return result;
}

initdb();
