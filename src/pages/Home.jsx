import Papa from "papaparse";
import { createContext, useContext, useState } from "react";
import CSVSelector from "../components/CSVSelector";
import MultiStepForm from "../components/MultiStepForm";
import { multiStepContext } from "../hooks/StepContext";

export const csvDataContext = createContext();

export default function Home() {
  const {userData, setUserData, finalData} = useContext(multiStepContext);

  const [parsedData, setParsedData] = useState([]);

  // state to store table Column name
  const [tableRows, setTableRows] = useState([]);

  // state to store the values
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

        const projectValuesChanged =
          userData.projectname !== finalData[finalData.length - 1]?.projectname ||
          userData.projectdescription !== finalData[finalData.length - 1]?.projectdescription ||
          userData.client !== finalData[finalData.length - 1]?.client ||
          userData.contractor !== finalData[finalData.length - 1]?.contractor;

        // If project-related values have changed, update KP values in userData
        if (projectValuesChanged) {
          const max_X = Math.max(...valuesArray.map(value => parseFloat(value[1])));
          const min_X = Math.min(...valuesArray.map(value => parseFloat(value[1])));
          const max_Y = Math.max(...valuesArray.map(value => parseFloat(value[2])));
          const min_Y = Math.min(...valuesArray.map(value => parseFloat(value[2])));
          const max_Z = Math.max(...valuesArray.map(value => parseFloat(value[3])));
          const min_Z = Math.min(...valuesArray.map(value => parseFloat(value[3])));

          // Update userData with these values
          setUserData({ ...userData, max_X, min_X, max_Y, min_Y, max_Z, min_Z });
        }
      },
    });
  };

  // console.log(values);

  const findMax = index => {
    const company = values.map(value => parseFloat(value[index]));
    const maxValue = Math.max(...company);
    return maxValue;
  }

  const findMin = index => {
    const company = values.map(value => parseFloat(value[index]));
    const minValue = Math.min(...company);
    return minValue;
  }

  return (
    <csvDataContext.Provider value={{ tableRows, values, changeHandler, findMax, findMin }}>
      <CSVSelector />
      <MultiStepForm />
    </csvDataContext.Provider>
  )
}