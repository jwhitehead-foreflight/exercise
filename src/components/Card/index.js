import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import axios from "axios";

const baseURL = "http://localhost:3000/airports/50r.json"

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

 React.useEffect(() => {
  axios.get(baseURL).then((response) => {
    setPosts(response.data)
    console.log(response.data)
    console.log(posts);
  });
 }, []);
  
  const classes = useStyles();


  return (
    <div>
    <h4>ICAO: {posts.icao}</h4>
    <h4>Name: {posts.name}</h4>
    {/* <h4>Available Runways: {posts.runways[0].ident}</h4> */}
    <h4>Latitude: {posts.latitude}</h4>
    <h4>Longitude: {posts.longitude}</h4>

    {/* <Card className={classes.root}>
      <CardContent>
        <h2>Airport</h2>
        <h3>ICAO:{posts.name}</h3>
        <Typography className={classes.title}  gutterBottom>
          ICAO:
        </Typography>
        <Typography className={classes.title}  gutterBottom>
          Airport Name:  
        </Typography>
        <Typography className={classes.title}  gutterBottom>
          Available Runways: 
        </Typography>
      </CardContent>
     
    </Card> */}
    </div>
  );
}

