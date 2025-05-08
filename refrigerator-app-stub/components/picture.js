import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Title from './title';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '75%', // 4:3
  },
}));

export default function Picture(props) {
  const classes = useStyles();
  const title = props.title || "冷蔵室";
  const imagePath = props.path;

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <CardMedia
        className={classes.media}
        image={imagePath}
        title={title}
      />
    </React.Fragment>
  );
}