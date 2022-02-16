import { Cancel } from '@mui/icons-material';
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
  themeBg: {
    backgroundColor: (props) => (props.themeDark ? '' : '#cacaca'),
    color: (props) => (props.themeDark ? '#cacaca' : '#111'),
  },
  card: {
    marginBottom: theme.spacing(5),
  },
  cancel: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
}));
const Post = ({ themeDark, post, onDelete }) => {
  const classes = useStyles({ themeDark });
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {post.yourSelf && (
          <Cancel
            style={{ color: '#9b9b9b' }}
            onClick={() => onDelete(post.id)}
            className={classes.cancel}
          />
        )}
        <CardMedia
          className={classes.media}
          image={post.linkImg}
          title={post.title}
        />

        <CardContent className={classes.themeBg}>
          <Typography gutterBottom variant="h5">
            {post.title}
          </Typography>
          <Typography variant="body2">
            {post?.desc.length > 300
              ? `${post.desc.slice(0, 300)}...`
              : post.desc}
          </Typography>
        </CardContent>
        <CardActions className={classes.themeBg}>
          <Button size="small">Share</Button>
          <Button
            target="_blank"
            component="a"
            href={post.linkPost}
            size="small"
          >
            View more
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
export default Post;
