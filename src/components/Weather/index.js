import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WeatherCard(props) {
  const airport = props.airport;

  const [posts, setPosts] = React.useState([]);

  //  const airString = JSON.stringify(airport)
  //  const newString = JSON.parse(airString)

  const baseURL = "http://localhost:3000/weather/50r.json";
  //const baseURL = newbaseURL

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, [airport]);

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <h2>Weather</h2>
          <Typography className={classes.title} gutterBottom>
            Temp: {posts?.report?.mos?.forecast?.conditions?.[0]?.tempMinC} *C
          </Typography>
          <Typography className={classes.title} gutterBottom>
            Relative Humidity:{" "}
            {posts?.report?.forecast?.conditions?.[0]?.relativeHumidity}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            Summary of Cloud Coverage:{" "}
            {
              posts?.report?.forecast?.conditions?.[0]?.cloudLayers?.[0]
                ?.coverage
            }
          </Typography>
          <Typography className={classes.title} gutterBottom>
            Visibility (Statute Miles):{" "}
            {posts?.report?.forecast?.conditions?.[0]?.visibility?.distanceSm}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            Wind Speed:{" "}
            {posts?.report?.forecast?.conditions?.[0]?.wind?.speedKts}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            Wind Direction:{" "}
            {posts?.report?.forecast?.conditions?.[0]?.wind?.direction}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
