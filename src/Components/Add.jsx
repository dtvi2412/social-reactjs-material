import React, { useState } from 'react';
import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles((theme) => ({
  fab: {
    // backgroundColor: (props) => (props.themeDark ? '#111 ' : '#ffc7c7 '),

    position: 'fixed !important',
    right: 20,
    bottom: 20,
  },
  icon: {
    [theme.breakpoints.down('sm')]: {},
  },
  container: {
    width: '500px !important',
    height: 650,
    borderRadius: '10px',

    backgroundColor: (props) => (props.themeDark ? '#1b1b1b' : '#2e2d69'),
    // backgroundColor: '#1b1b1b',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',

    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    },
  },
  form: { padding: '20px' },
  item: {
    marginBottom: theme.spacing(3),
  },
  input: {
    width: '100%',

    // background: (props) =>
    //   props.themeDark ? 'red !important' : 'blue !important',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '240px',
    },
  },
  radioLbl: {
    // color: (props) => (props.themeDark ? '#fff' : '#111'),
    color: '#fff',
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Add = ({ themeDark, onAddPost }) => {
  const classes = useStyles({ themeDark });
  const [openModel, setOpenModel] = useState(false);
  const [openAlert, setOpenAlert] = useState({
    isOpen: false,
    isErr: false,
  });
  const [inputs, setInputs] = useState({
    id: '',
    title: '',
    linkImg: '',
    linkPost: '',
    desc: '',
  });

  const [visibility, setVisibility] = useState('Public');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert({ isErr: false, isOpen: false });
  };

  //Handle Onchange
  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  //Handle Add
  const handleAdd = () => {
    const { title, desc, linkImg, linkPost } = inputs;
    const data = {
      id: Math.random() * new Date().getTime(),
      title,
      desc,
      linkImg,
      linkPost,
      yourSelf: true,
    };
    if (title !== '' && desc !== '' && linkImg !== '' && linkPost !== '') {
      onAddPost(data);
      setInputs({
        id: '',
        title: '',
        linkImg: '',
        linkPost: '',
      });
      setOpenAlert({ isOpen: true, isErr: false });
      setOpenModel(false);
    } else {
      setOpenAlert({ isOpen: true, isErr: true });
    }
  };

  return (
    <>
      <Tooltip title="Add" aria-label="Add" onClick={() => setOpenModel(true)}>
        <Fab color={themeDark ? 'inherit' : 'primary'} className={classes.fab}>
          <AddIcon className={classes.icon} />
        </Fab>
      </Tooltip>
      <Modal open={openModel} onClose={() => setOpenModel(false)}>
        <Container className={classes.container}>
          <form className={classes.form} autocomplete="off">
            <div className={classes.item}>
              <TextField
                name="title"
                value={inputs.title}
                label="Title"
                size="small"
                className={classes.input}
                variant="outlined"
                onChange={handleOnChange}
              />
            </div>
            <div className={classes.item}>
              <TextField
                name="desc"
                value={inputs.desc}
                label="Desctiption"
                // multiline

                size="large"
                className={classes.input}
                variant="outlined"
                onChange={handleOnChange}
              />
            </div>
            <div className={classes.item}>
              <TextField
                name="linkImg"
                value={inputs.linkImg}
                label="Link Image"
                size="large"
                className={classes.input}
                variant="outlined"
                onChange={handleOnChange}
              />
            </div>
            <div className={classes.item}>
              <TextField
                name="linkPost"
                label="Link Post"
                value={inputs.linkPost}
                defaultValue="Tell your story..."
                size="large"
                className={classes.input}
                variant="outlined"
                onChange={handleOnChange}
              />
            </div>
            <div className={classes.item}>
              <TextField
                variant="standard"
                select
                label="Visibility"
                value={visibility}
                onChange={(e) => setVisibility(e.target.value)}
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel id="demo-radio-buttons-group-label">
                Who can comment?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Everybody"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                  className={classes.radioLbl}
                  // style={{ color: 'white' }}
                />
                <FormControlLabel
                  value="My friend"
                  control={<Radio size="small" />}
                  label="My friend"
                  className={classes.radioLbl}
                  // style={{ color: 'white' }}
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                  className={classes.radioLbl}
                  // style={{ color: 'white' }}
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: '10px' }}
                onClick={() => handleAdd()}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpenModel(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>

      {/* Snackbar   */}
      <Snackbar
        open={openAlert.isOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpenAlert((prev) => ({ ...prev, isOpen: false }))}
          severity={`${openAlert.isErr ? 'error' : 'success'}`}
          sx={{ width: '100%' }}
        >
          {openAlert.isErr
            ? 'Please complete all information'
            : '    Your post is more successful!'}
        </Alert>
      </Snackbar>
    </>
  );
};
export default Add;
