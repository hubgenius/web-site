import { Button, ButtonGroup, Container, Typography } from '@material-ui/core'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react'

function Pass() {
  return (
    <Container>
      {/* <Typography variant='h1'
      color='secondary'
      align='center'
      >
      create page

      </Typography> */}


      {/* <Typography
      variant='h6'
      component='h2'
      noWrap>
        loremdcfdvdrvrfrfgvfbejbfjkbfwebfhbedhbcjhbdjhvfbejhfbcejhbfcejhd fdhbfwejhdbfjhefbebfewbhfegwfyuegfeiugbfuiewfheuiwfgyetf7ge6gywebfuhebh
      </Typography> */}



      <Button type='submit' variant='contained' color='secondary'
      endIcon={<KeyboardArrowRightIcon/>}
      > submit</Button>
      <br/>

      <ButtonGroup  variant='contained'>
        <Button>rfgvr</Button>
        <Button>rfr</Button>
        <Button>rregre</Button>
      </ButtonGroup>
   
   
    </Container>
  )
}

export default Pass