import { ListItem ,List} from '@material-ui/core'
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SubjectOutlined from '@mui/icons-material/SubjectOutlined'
import AddCircleOutlineOutlined from '@mui/icons-material/AddCircleOutlineOutlined'

export default function About () {
  const menuItems = [
   {
     text: 'My Notes',
     icon:<SubjectOutlined color="secondary"/>,
    
   },
   {
     text:'Create Note',
     icon:<AddCircleOutlineOutlined color='secondary'/>,
    
   }
  ]

  return (
    <div>
      <AcUnitIcon/>
      <AddCircleIcon/>
       <List>
         {menuItems.map(item =>(
         <ListItem  key={item.text}  >
           {item.text}
           {item.icon}
         </ListItem>


))}
       </List>
    
         </div>
  )
}
