import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '10px',
    padding: '10px',
  },
  card: {
    backgroundColor: 'darkpink',
    padding: '10px',
    borderRadius: '5px',
  },
}));

const Meeting = ({ meeting }) => {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <List component="nav" aria-label="Appointment List">
        <ListItem>
          <ListItemText primary="Service Name" secondary={meeting.serviceName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Date and Time" secondary={meeting.dateTime} />
        </ListItem>
        <ListItem>
          <ListItemText primary="User Name" secondary={meeting.NameUser} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone" secondary={meeting.Phone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={meeting.Email} />
        </ListItem>
      </List>
    </div>
  );
};

export default Meeting;

