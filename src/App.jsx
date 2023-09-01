import { useState } from "react";
import "./App.css";
import CSVSelector from "./components/CSVSelector";
import MultiStepForm from "./components/MultiStepForm";
import StepContext from "./hooks/StepContext";
import Papa from "papaparse";

function App() {
// State to store parsed data
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

  return (
    <div>
      <CSVSelector values={values} changeHandler={changeHandler} tableRows={tableRows} />
      <StepContext>
        <MultiStepForm />
      </StepContext>
    </div>
  );
}

export default App;