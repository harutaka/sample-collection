import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Title from './title';

const useStyles = makeStyles(theme => ({
  depositContext: {
    flex: 1,
  },
  barMargin: {
    margin: theme.spacing(1),
  },
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
  },
  bar: {
    borderRadius: 20,
  },
  colorSecondary: {
    backgroundColor: '#B2DFDB',
  },
  barColorSecondary: {
    backgroundColor: '#00695C',
  }
})(LinearProgress);

export default function Weight(props) {
  const classes = useStyles();
  const title = props.title || "500ml";
  const weight = Number(props.weight)===0 ? 0 : (Number(props.weight) || 50);
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <BorderLinearProgress
        className={classes.barMargin}
        variant="determinate"
        value={weight}
        color={props.color}
      />
    </React.Fragment>
  );
}