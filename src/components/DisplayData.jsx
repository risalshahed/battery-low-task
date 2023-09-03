import { useContext, useRef } from "react";
import { multiStepContext } from "../hooks/StepContext";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useReactToPrint } from "react-to-print";

export default function DisplayData() {
  const { finalData } = useContext(multiStepContext);
  // console.log(finalData);

  // Check if project-related values have changed
  /* const projectValuesChanged =
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

    setUserData({
      ...userData,
      max_X,
      min_X,
      max_Y,
      min_Y,
      max_Z,
      min_Z,
    });
  } */
  
  // download as PDF
  const downloadPDF = useRef();

  const generatePDF = useReactToPrint({
    content: () => downloadPDF.current,
    documentTitle: 'KP Values',
    // onAfterPrint: alert('Data saved in PDF')
  })
  
  return (
    <div className="display_data">
      {/* width: '100%' */}
      <TableContainer ref={downloadPDF} style={{display: 'flex', justifyContent: 'center'}}>
        <Table border='1' style={{width: '70%'}}>
          <TableHead>
            <TableRow style={{backgroundColor: 'violet'}}>
              <TableCell>Project Name</TableCell>
              <TableCell>Project Description</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Contractor</TableCell>
              <TableCell>Max X</TableCell>
              <TableCell>Min X</TableCell>
              <TableCell>Max Y</TableCell>
              <TableCell>Min Y</TableCell>
              <TableCell>Max Z</TableCell>
              <TableCell>Min Z</TableCell>
              
            </TableRow>
          </TableHead>

          <TableBody>
            {
              finalData.map(datum => (
                <TableRow key={datum.client}>
                  <TableCell>{datum.projectname}</TableCell>
                  <TableCell>{datum.projectdescription}</TableCell>
                  <TableCell>{datum.client}</TableCell>
                  <TableCell>{datum.contractor}</TableCell>
                  <TableCell>{datum.max_X}</TableCell>
                  <TableCell>{datum.min_X}</TableCell>
                  <TableCell>{datum.max_Y}</TableCell>
                  <TableCell>{datum.min_Y}</TableCell>
                  <TableCell>{datum.max_Z}</TableCell>
                  <TableCell>{datum.min_Z}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>

      <Box my={5} display='flex' justifyContent='center'>
        <Button onClick={generatePDF} variant='contained' color='secondary'>
          Download as PDF
        </Button>
      </Box>
    </div>
  )
}