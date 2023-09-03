import { useContext } from "react";
import { csvDataContext } from "../pages/Home";
// import Papa from "papaparse";
// import { csvDataContext } from "../App";

export default function CSVSelector() {
  const { values, tableRows, changeHandler, findMax, findMin } = useContext(csvDataContext);

  return (
    <div>
      {/* File Uploader */}
      <input
        className="tanvir"
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <br />

      {
        values.length
        ?
        <h2 style={{textAlign: 'center'}}>Top 10 Data</h2>
        :
        null
      }

      {/* Table */}
      <table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {
            values.map((value, index) => {
              // console.log(value.slice(0,5))
              return (
                <tr key={index}>
                  {
                    value.map((val, i) => {
                      // console.log(val.slice(0,5))
                      return <td key={i}>{val}</td>
                    })
                  }
                </tr>
              );
            }).slice(0, 10)
          }
        </tbody>

      </table>

      {
        values.length ? (
          <div style={{textAlign: 'center'}}>
            <div style={{marginTop: '16px'}}>
              <h4>
                Maximum value of x: <span style={{color: 'blue'}}>{findMax(1)}</span>
              </h4>
              <h4>
                Minimum value of x: <span style={{color: 'blue'}}>{findMin(1)}</span>
              </h4>
            </div>
            <div style={{marginTop: '16px'}}>
              <h4>
                Maximum value of y: <span style={{color: 'darkblue'}}>{findMax(2)}</span>
              </h4>
              <h4>
                Minimum value of y: <span style={{color: 'darkblue'}}>{findMin(2)}</span>
              </h4>
            </div>
            <div style={{marginTop: '16px'}}>
              <h4>
                Maximum value of z: <span style={{color: 'purple'}}>{findMax(3)}</span>
              </h4>
              <h4>
                Minimum value of z: <span style={{color: 'purple'}}>{findMin(3)}</span>
              </h4>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}