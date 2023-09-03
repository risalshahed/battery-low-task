/* import { createContext, useState } from 'react'
import App from '../App';
import Papa from "papaparse";

export const csvDataContext = createContext();

export default function CSVDataContext() {

  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = e => {
    // Passing file data (e.target.files[0]) to parse using Papa.parse
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map(datum => {
          rowsArray.push(Object.keys(datum));
          valuesArray.push(Object.values(datum));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  // console.log(values);

  return (
    <>
      {
        values.length ? (
          <csvDataContext.Provider value={{ values, tableRows, changeHandler }}>
            <App />
          </csvDataContext.Provider>
        ) : null
      }
    </>
  )
} */