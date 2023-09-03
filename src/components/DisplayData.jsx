import { useContext } from "react";
import { multiStepContext } from "../hooks/StepContext";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function DisplayData() {
  const { finalData } = useContext(multiStepContext);
  console.log(finalData);
  
  return (
    <div>
      <TableContainer style={{display: 'flex', justifyContent: 'center'}}>
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
    </div>
  )
}