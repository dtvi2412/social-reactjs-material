import { Home } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ListIcon from '@mui/icons-material/List';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'sticky',
    top: 56,
    paddingTop: theme.spacing(2),
    // backgroundColor: theme.palette.primary.main,
    // color: 'white',
    backgroundColor: (props) => (props.themeDark ? '#252525' : '#eee'),
    color: (props) => (props.themeDark ? '#eee' : '#252525'),
    height: 'calc(100vh - 56px)',
    [theme.breakpoints.up('sm')]: {
      // color: '#555',
      // backgroundColor: 'white',
      border: '1px solid #e2e2e2',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
  },
  text: {
    fontSize: '15px',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
const LeftBar = ({ themeDark }) => {
  const classes = useStyles({ themeDark });
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <PeopleAltIcon className={classes.icon} />
        <Typography className={classes.text}>Friend</Typography>
      </div>
      <div className={classes.item}>
        <ListIcon className={classes.icon} />
        <Typography className={classes.text}>List</Typography>
      </div>
      <div className={classes.item}>
        <CameraAltIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <MissedVideoCallIcon className={classes.icon} />
        <Typography className={classes.text}>Video</Typography>
      </div>
      <div className={classes.item}>
        <AppSettingsAltIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <CollectionsIcon className={classes.icon} />
        <Typography className={classes.text}>Colections</Typography>
      </div>
      <div className={classes.item}>
        <AddBusinessIcon className={classes.icon} />
        <Typography className={classes.text}>Market</Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Setting</Typography>
      </div>
      <div className={classes.item}>
        <LogoutIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};
export default LeftBar;
