import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import api from '../../api/posts';
import { useState, useEffect } from 'react';


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


 const [posts, setPosts] = useState([]);
  
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <h2>Airport</h2>
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
     
    </Card>
  );
}

