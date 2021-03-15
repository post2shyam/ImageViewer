import React, { Component } from "react";
import "./InfoCard.css";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = (theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

//Child component to be used inside Home Screen
class InfoCard extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      dummyHashTags: [],
      likeIcon: "dispBlock",
      likedIcon: "dispNone",
      likesCount: 0,
    };
  }

  //On click of add button add a new comment to existing comments section of screen.
  addClickHandler = (event) => {
    //Update the collection of comments
    const commentId = "comment" + this.props.id;
    const currentComment = document.getElementById(commentId).value;
    const commentsCollection = this.state.comments.slice();
    commentsCollection.push(currentComment);
    this.setState({ comments: commentsCollection });
    //Empty the field
    document.getElementById(commentId).value = "";
  };

  //function to add a like to a post
  likeClickHandler = (event) => {
    const currentLikeCount = this.state.likesCount + 1;
    this.setState({
      likeIcon: "dispNone",
      likedIcon: "dispBlock",
      likesCount: currentLikeCount,
    });
  };

  //function to unlike a post
  likedClickHandler = (event) => {
    const currentLikeCount = this.state.likesCount - 1;
    this.setState({
      likeIcon: "dispBlock",
      likedIcon: "dispNone",
      likesCount: currentLikeCount,
    });
  };

  //Format date time of the post to dd/mm/yyyy HH:MM:SS
  getFormatedTimeStamp(scrambledTimestamp) {
    const date = ("0" + scrambledTimestamp.getDate()).slice(-2),
      month = ("0" + (scrambledTimestamp.getMonth() + 1)).slice(-2);
    return (
      date +
      "/" +
      month +
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

  componentDidMount() {
    this.setState({
      likesCount: this.props.likesCount,
      dummyHashTags:
        this.props.caption.match(/#\S+/g) == null
          ? []
          : this.props.caption.match(/#\S+/g),
    });
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
              {this.state.dummyHashTags.map((hashtag) => (
                <Typography
                  variant="body2"
                  style={{ color: "blue" }}
                  display="inline"
                >
                  {hashtag + " "}
                </Typography>
              ))}
            </CardContent>
            <CardActions disableSpacing>
              <div className="likes">
                <div
                  className={this.state.likeIcon}
                  onClick={this.likeClickHandler}
                >
                  <FavoriteBorderIcon />
                </div>
                <div className={this.state.likedIcon}>
                  <FavoriteIcon
                    style={{ color: "red" }}
                    onClick={this.likedClickHandler}
                  />
                </div>
                <span style={{ marginLeft: 10 }}>
                  {this.state.likesCount < 2 ? (
                    <div> {this.state.likesCount} like </div>
                  ) : (
                    <div> {this.state.likesCount} likes </div>
                  )}
                </span>
              </div>
            </CardActions>
            {this.state.comments.map((comment) => (
              <CardActions disableSpacing>
                <Typography
                  variant="body2"
                  style={{ fontWeight: "bold" }}
                  display="inline"
                >
                  {this.props.username + ":"}
                </Typography>
                <Typography variant="body2" display="inline">
                  {comment}
                </Typography>
              </CardActions>
            ))}
            <CardActions enablespacing>
              <FormControl>
                <InputLabel htmlFor="comment">Add a comment</InputLabel>
                <Input
                  className="input"
                  id={"comment" + this.props.id}
                  type="text"
                />
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
