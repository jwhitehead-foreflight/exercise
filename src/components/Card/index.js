import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import axios from "axios";
import SimpleSelect from '../Select';
import { useStoreContext } from '../../utils/globalstate';



// useEffect(() => {
//   const fetchPosts = async() => {
//     try {
//       const response = await api.get('/posts');
//       setPosts(response.data);
//     } catch (err) {
//       console.log('Error!');
//     }
//   }
//   fetchPosts();
// }, [])

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

export default function SimpleCard() {


 const [posts, setPosts] = React.useState([]);
 const { airport } = useStoreContext();
 console.log(airport);
 const airString = JSON.stringify(airport)
 const newString = JSON.parse(airString)
 
 const newURL = "http://localhost:3000/airports/"+newString+".json"
 const newbaseURL = JSON.stringify(newURL)
  const baseURL = "http://localhost:3000/airports/50r.json"
 //const baseURL = newbaseURL
 console.log(newbaseURL)
 console.log(baseURL)

 React.useEffect(() => {
  console.log(baseURL)
  axios.get(baseURL).then((response) => {
    setPosts(response.data)
    console.log(response.data)
    console.log(posts);
  });
 }, []);
  
  const classes = useStyles();


  return (
    <div>

    <Card className={classes.root}>
      <CardContent>
        <h2>Airport: {posts.name}</h2>
        <Typography className={classes.title}  gutterBottom>
          ICAO: {posts.icao}
        </Typography>
        <Typography className={classes.title}  gutterBottom>
          Available Runways: 
        </Typography>
        <Typography className={classes.title}  gutterBottom>
          Latitude: {posts.latitude} 
        </Typography>
        <Typography className={classes.title}  gutterBottom>
          Longitude: {posts.longitude} 
        </Typography>
      </CardContent>
     
    </Card>
    </div>
  );
}

