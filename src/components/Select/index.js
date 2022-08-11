import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStoreContext } from '../../utils/globalstate';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

 

  // const [airport, setAirport] = React.useState('');

  // const { newAirport } = useStoreContext();

  // const handleChange = (event) => {

  //   //setAirport(event.target.value);
  //   //  newAirport(event.target.value)
  // };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Airport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={airport}
          // label="airport"
          onChange={event => props.onChange(event.target.value)}
        >
          <MenuItem value={'none'}>NONE</MenuItem>
          <MenuItem value={'50r'}>Lockhart</MenuItem>
          <MenuItem value={'egll'}>London</MenuItem>
          <MenuItem value={'kaus'}>Austin</MenuItem>
          <MenuItem value={'khou'}>Houston</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}
