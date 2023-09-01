import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { multiStepContext } from "../hooks/StepContext";

export default function SecondStep() {
  const { setStep, submitData, userData, setUserData } = useContext(multiStepContext);

  return (
    <div>
      <div>
        <TextField
          label='Max X'
          type='number'
          value={userData.projectname2}
          onChange={e => setUserData({...userData, 'max_X': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <TextField
          label='Min X'
          type='number'
          value={userData.projectdescription2}
          onChange={e => setUserData({...userData, 'min_X': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <TextField
          label='Max Y'
          type='number'
          value={userData.client2}
          onChange={e => setUserData({...userData, 'max_Y': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <TextField
          label='Min Y'
          type='number'
          value={userData.contractor2}
          onChange={e => setUserData({...userData, 'min_Y': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <TextField
          label='Max Z'
          type='number'
          value={userData.client2}
          onChange={e => setUserData({...userData, 'max_Z': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <TextField
          label='Min Z'
          type='number'
          value={userData.contractor2}
          onChange={e => setUserData({...userData, 'min_Z': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <div>
          <Box my={2} display='flex' justifyContent='center'>
            <Button onClick={() => setStep(1)} variant='contained' color='primary'>
              Previous
            </Button>
          </Box>
        </div>
        <div>
          <Box my={2} display='flex' justifyContent='center'>
            <Button onClick={submitData} variant='contained' color='secondary'>
              Submit
            </Button>
          </Box>
        </div>
      </div>
    </div>
  )
}