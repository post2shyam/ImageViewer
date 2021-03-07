import React, { Component } from "react";
import "./InfoCard.css";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const useStyles = (theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

class InfoCard extends Component {
  getFormatedTimeStamp(scrambledTimestamp) {
    return (
      scrambledTimestamp.getMonth() +
      1 +
      "/" +
      scrambledTimestamp.getDate() +
      "/" +
      scrambledTimestamp.getFullYear() +
      " " +
      scrambledTimestamp.getHours() +
      ":" +
      scrambledTimestamp.getMinutes() +
      ":" +
      scrambledTimestamp.getSeconds()
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className="cards-layout">
          <div className="posts">
            <CardHeader
              avatar={<Avatar src={this.props.profile_url} alt="pic" />}
              title={this.props.username}
              subheader={this.getFormatedTimeStamp(this.props.timestamp)}
            />
            <CardMedia className={classes.media} image={this.props.media_url} />
            <CardContent>
              <Typography variant="body2" color="black" component="p">
                {this.props.caption}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="red" />
              </IconButton>
              <Typography variant="body1" color="black" component="p">
                7 likes
              </Typography>
            </CardActions>
            <CardActions enablespacing>
              <FormControl>
                <InputLabel htmlFor="comment">Add a comment</InputLabel>
                <Input className="input" id="comment" type="text" />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                onClick={this.addClickHandler}
              >
                ADD
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(InfoCard);
