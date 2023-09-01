import { Box, Button, TextField } from '@mui/material'
import { useContext } from 'react'
import { multiStepContext } from '../hooks/StepContext'

export default function FirstStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div>
      <div>
        <TextField
          label='Project Name'
          value={userData.projectname}
          onChange={e => setUserData({...userData, 'projectname': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <TextField
          label='Project Description'
          value={userData.projectdescription}
          onChange={e => setUserData({...userData, 'projectdescription': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <TextField
          value={userData.client}
          onChange={e => setUserData({...userData, 'client': e.target.value})}
          label='Client'
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <TextField
          label='Contractor'
          value={userData.contractor}
          onChange={e => setUserData({...userData, 'contractor': e.target.value})}
          margin='normal'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <Box my={2} display='flex' justifyContent='center'>
          <Button onClick={() => setStep(2)} variant='contained' color='primary'>
            Next
          </Button>
        </Box>
      </div>
    </div>
  )
}