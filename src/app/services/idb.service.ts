
import * as JsStore from 'jsstore';
import { environment } from 'src/environments/environment';
import { ITable, IDataBase } from 'jsstore';
declare var require: any;

const getWorkerPath = () => {
  if (environment.production) {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js');
  } else {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js');
  }
};

export const idbCon = new JsStore.Connection(new Worker(getWorkerPath().default));
export const dbname = 'Debitspace';

const getDatabase = () => {

  // const tblStudent: ITable = {
  //   name: 'Students',
  //   columns: {
  //     id: {
  //       primaryKey: true,
  //       autoIncrement: true
  //     },
  //     name: {
  //       notNull: true,
  //       dataType: DATA_TYPE.String
  //     },
  //     gender: {
  //       dataType: DATA_TYPE.String,
  //       default: 'male'
  //     },
  //     country: {
  //       notNull: true,
  //       dataType: DATA_TYPE.String
  //     },
  //     city: {
  //       dataType: DATA_TYPE.String,
  //       notNull: true
  //     }
  //   }
  // };

  const dataBase: IDataBase = {
    name: dbname,
    tables: [] // create a workspace table in order to pass it here.
  };
  return dataBase;
};

export const initJsStore = async () => {
  const dataBase = getDatabase();
  const isDbCreated = await idbCon.initDb(dataBase);
  if (isDbCreated) {
    console.log("[DATABASE] Created");
  }
};


