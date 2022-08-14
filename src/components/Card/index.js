import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from "axios";




const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {

 const airport = props.airport;
console.log(airport)

 const [posts, setPosts] = React.useState([]);
 
 const baseURL = "http://localhost:3000/airports/50r.json"

 React.useEffect(() => {
  axios.get(baseURL)
  .then((response) => {
    setPosts(response.data)

  });
 }, [airport]);
  
  const classes = useStyles();


  return (
    <div>

    <Card className={classes.root}>
      <CardContent>
        <h2>Airport: {posts?.name}</h2>
        <Typography className={classes.title}  gutterBottom>
          ICAO: {posts?.icao}
        </Typography>
        <Typography className={classes.title}  gutterBottom>
          Available Runways: {posts?.runways?.[0]?.ident}
        </Typography>
        <Typography className={classes.title}  gutterBottom>
          Latitude: {posts?.latitude} 
        </Typography>
        <Typography className={classes.title}  gutterBottom>
          Longitude: {posts?.longitude} 
        </Typography>
      </CardContent>
     
    </Card>
    </div>
  );
}
