import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import image from "../../images/people.png";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    width: "35vw",
    minWidth: 300,
    padding: "20px",
  },
  media: {
    height: 0,
    paddingTop: "74.25%",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    justifyContent: "center",
    color: "primary",
  },
  heading: {
    margin: "0px 0 12% 0",
    color: theme.palette.primary.dark,
    fontSize: "4.5rem",
    lineHeight: "1",
    textShadow: "1px 1px 3px #093892",
  },
}));

const LandingPage = ({ page, setPage }) => {
  const classes = useStyles();

  if (page !== "landing") {
    return null;
  }

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardMedia image={image} className={classes.media} title="People" />
        <CardContent className={classes.content}>
          <Typography
            className={classes.heading}
            component="h1"
            variant="h1"
            align="center"
          >
            We Will Meet Again
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setPage("form")}
          >
            Let's start
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;
