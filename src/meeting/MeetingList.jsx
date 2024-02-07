import './meeting.css'
import meetingStore from "./meetingStore"
import { useEffect } from "react"
import { Grid, Paper, Typography } from "@mui/material"
import { observer } from "mobx-react"
import { getMeeting } from "../service/serviceServer"
import { makeStyles } from '@material-ui/core/styles';


const getColr = (datetime) => {
  const today = new Date();
  const myDate = new Date(datetime);
  const x = myDate.getTime() - today.getTime()//datediff
 
  const diffDays = Math.ceil(x / (1000 * 3600 * 24));

  if (diffDays === 0)//היום
      return 0
  if (diffDays <= 7)//השבוע
      return 1
  if (diffDays > 7)
      return 2
  
}


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '10px',
    padding: '10px',
  },
  card: {
    backgroundColor: 'darkpink',
    padding: '10px',
    borderRadius: '5px',
  },
}));

const MeetingList = observer(() => {
  const classes = useStyles();

  useEffect(() => {
    getMeeting();

  }, [])
  return (
    <>
<div id="div">
  {meetingStore.all_meeting
      .slice() // יצירת עותק של המערך
    .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
    .map((meeting, index) => (
      <div  key={index}
        className={
          getColr(meeting.dateTime) === 0
            ? `red`
            : getColr(meeting.dateTime) === 1
            ? `orange`
            : `green`
        }
      >
        <Grid item>
          <Paper id="paper" className="card">
            {Object.entries(meeting).map(([key, value], ind) => (
              <div key={ind}>
                <Typography variant="subtitle1">{key}:</Typography>
                <Typography variant="body1">{value}</Typography>
              </div>
            ))}
          </Paper>
        </Grid>
      </div>
    ))}
</div>

</>
  )
})

export default MeetingList

