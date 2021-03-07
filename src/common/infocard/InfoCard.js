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
import TextField from "@material-ui/core/TextField";

const useStyles = (theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

class InfoCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className="cards-layout">
          <div className="posts">
            <CardHeader
              avatar={<Avatar src={this.props.profile_url} alt="pic" />}
              title={this.props.username}
              subheader={this.props.timestamp}
            />
            <CardMedia className={classes.media} image={this.props.media_url} />
            <CardContent>
              <Typography variant="body2" color="black" component="p">
                {this.props.caption}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Typography variant="body1" color="black" component="p">
                7 likes
              </Typography>
            </CardActions>
            <CardActions enablespacing>
              <TextField placeholder="Add a comment" />
              <Button
                variant="contained"
                color="primary"
                onClick={this.loginClickHandler}
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
