import React,{useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function Contact() {
  const [checked, setChecked] =useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div> 
    <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    subheader={<ListSubheader>Settings</ListSubheader>}
  >
    <ListItem>
      <ListItemIcon>
        <WifiIcon />
      </ListItemIcon>
      <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
      <Switch
        edge="end"
        onChange={handleToggle('wifi')}
        checked={checked.indexOf('wifi') !== -1}
        inputProps={{
          'aria-labelledby': 'switch-list-label-wifi',
        }}
      />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <BluetoothIcon />
      </ListItemIcon>
      <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
      <Switch
        edge="end"
        onChange={handleToggle('bluetooth')}
        checked={checked.indexOf('bluetooth') !== -1}
        inputProps={{
          'aria-labelledby': 'switch-list-label-bluetooth',
        }}
      />
    </ListItem>
  </List>
 
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>


    </div>
  )
}
