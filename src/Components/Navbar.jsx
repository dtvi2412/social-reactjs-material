import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Switch,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import CancelIcon from '@mui/icons-material/Cancel';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  appbar: {
    top: 0,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: (props) => (props.themeDark ? '' : '#000c94'),
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.openSearch ? 'flex' : 'none'),
      marginLeft: 20,
    },
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.45)',
    },
  },
  cancel: {
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none !important',
    },
  },
  searchBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none !important',
    },
  },
  iconSearch: {
    margin: '0 6px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.openSearch ? 'none' : 'flex'),
    },
  },
  badge: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none !important',
    },
  },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Navbar = ({ themeDark, onToggleTheme }) => {
  const [openSearch, setOpenSearch] = useState(false);

  const classes = useStyles({ openSearch, themeDark });

  return (
    <AppBar position="sticky" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.logoSm}>
          SocialDev
        </Typography>
        <Typography variant="h5" className={classes.logoLg}>
          SOCIAL
        </Typography>
        <div className={classes.search}>
          <Search className={classes.iconSearch} />
          <InputBase style={{ color: 'white' }} placeholder="Search..." />
          <CancelIcon
            className={classes.cancel}
            onClick={() => setOpenSearch(false)}
          />
        </div>
        <div className={classes.icons}>
          <Switch
            checked={themeDark ? false : true}
            onClick={(e) =>
              e.target.checked ? onToggleTheme(false) : onToggleTheme(true)
            }
            {...label}
            size="small"
            color={'default'}
          />
          <Search
            className={classes.searchBtn}
            onClick={() => setOpenSearch(true)}
          />
          <Badge className={classes.badge} badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
          <Badge className={classes.badge} badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
