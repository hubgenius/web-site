import { Button, ButtonGroup,Card, CardContent, CardHeader, Container, Grid, IconButton, Typography} from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react'
import MaterialTable from 'material-table';


function Pass() {
  const data = [
    { Name: "aman", Age: 25, Place: "india" },
    { Name: "rahul", Age: 25, Place: "canada" },
    { Name: "rahul", Age: 25, Place: "canada" },
    { Name: "krunal", Age: 25, Place: "london" }
]


// const columns=[
//     {
//         title:"Name" ,field:"Name"
//     },
//     {
//         title:"Age"  ,field:"Age"
//     },
//     {
//         title:"Place",field:"Place"
//     }
// ]
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



      {/* <Button type='submit' variant='contained' color='secondary'
      endIcon={<KeyboardArrowRightIcon/>}
      > submit</Button>
      <br/>

      <ButtonGroup  variant='contained'>
        <Button>rfgvr</Button>
        <Button>rfr</Button>
        <Button>rregre</Button>
      </ButtonGroup> */}
      
      <Card>
        <CardHeader
         action={
           <IconButton>
             <DeleteOutline/>
           </IconButton>
         }

        />
    <Grid container spacing={3}>
         {data.map(data => (
           <Grid item key={data.Name} xs={12} md={6} lg={4}>
             
             </Grid>
         ))}
         <CardContent>
           <Typography>
             {data.Name}
           </Typography>
         </CardContent>


</Grid>
       
        
        
         {/* <MaterialTable  title=" Material Table"
                
               
                    /> */}
         
      </Card>
   
   
    </Container>
  )
}

export default Pass