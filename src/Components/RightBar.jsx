import {
  Avatar,
  AvatarGroup,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'sticky',
    top: 56,
    paddingTop: theme.spacing(2),
  },
  title: {
    color: '#585858',
    marginBottom: '10px !important',
  },
  link: {
    marginRight: '10px !important',
    color: '#555 !important',
    fontSize: '15px !important',
  },
  categories: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  friends: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  avatarGroup: {
    [theme.breakpoints.down('md')]: {
      display: 'none !important',
    },
  },
  imgList: {
    // Hide Scrollbar
    '-ms-overflow-style': 'none' /* IE and Edge */,
    'scrollbar-width': 'none' /* Firefox */,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={`${classes.title} ${classes.avatarGroup}`}>
        Online Friends{' '}
      </Typography>

      <AvatarGroup max={6} className={classes.avatarGroup}>
        <div className={classes.friends}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/4938097/pexels-photo-4938097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Avatar alt="Travis Howard" src="" />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/4938438/pexels-photo-4938438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/4936919/pexels-photo-4936919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/4936926/pexels-photo-4936926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/4936919/pexels-photo-4936919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/4938111/pexels-photo-4938111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
      </AvatarGroup>

      <Typography className={classes.title}>Gallery</Typography>
      <ImageList
        sx={{ width: '100%', height: 450 }}
        variant="quilted"
        cols={1}
        rowHeight={164}
        className={classes.imgList}
      >
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            srcSet="https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="galery"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            srcSet="https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="galery"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/6607754/pexels-photo-6607754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            srcSet="https://images.pexels.com/photos/6607754/pexels-photo-6607754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="galery"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            srcSet="https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="galery"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/700413/pexels-photo-700413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            srcSet="https://images.pexels.com/photos/700413/pexels-photo-700413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="galery"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            srcSet="https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="galery"
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title}>Categories</Typography>
      <div className={classes.categories}>
        <Link className={classes.link} href="#" variant="body2">
          Sport
        </Link>
        <Link className={classes.link} href="#" variant="body2">
          Food
        </Link>
        <Link className={classes.link} href="#" variant="body2">
          Movie
        </Link>
        <Divider style={{ marginBottom: 10 }} orientation="vertical" flexItem />
        <Link className={classes.link} href="#" variant="body2">
          English
        </Link>
        <Link className={classes.link} href="#" variant="body2">
          Music
        </Link>
        <Link className={classes.link} href="#" variant="body2">
          Life
        </Link>
        <Link className={classes.link} href="#" variant="body2">
          Science
        </Link>
      </div>
    </Container>
  );
};
export default Rightbar;
