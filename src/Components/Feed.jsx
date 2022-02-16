import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Post from './Post';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
}));
const Feed = ({ themeDark, dataPost, onDelete }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {dataPost.map((post) => (
        <Post
          key={post.id}
          post={post}
          themeDark={themeDark}
          onDelete={onDelete}
        />
      ))}
    </Container>
  );
};
export default Feed;
