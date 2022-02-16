import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { dataPost as data } from './data';
import { Add, Feed, Leftbar, Navbar, Rightbar } from './Components';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

//Theme

function App() {
  const classes = useStyles();
  const [themeDark, setThemeDark] = useState(() => {
    const themeLocalStor = localStorage.getItem('theme');
    if (themeLocalStor) return JSON.parse(themeLocalStor);
    else return true;
  });
  const [dataPost, setDataPost] = useState(() => {
    const postDataInLocalStor = localStorage.getItem('dataPost');
    if (postDataInLocalStor) return JSON.parse(postDataInLocalStor);
    else return data;
  });

  const toggleTheme = (boolean) => {
    setThemeDark(boolean);
  };

  const addPost = (data) => {
    const cloneDataPost = [...dataPost];
    cloneDataPost.unshift(data);
    setDataPost(cloneDataPost);
  };

  const deletePostYourSelf = (id) => {
    const checkIndex = dataPost.findIndex((post) => post.id === id);
    setDataPost((prev) => {
      //Has id in data
      if (checkIndex >= 0 && dataPost[checkIndex].yourSelf) {
        return prev.filter((p) => p.id !== id);
      } else return prev;
    });
  };

  useEffect(() => {
    localStorage.setItem('dataPost', JSON.stringify(dataPost));
  }, [dataPost]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeDark));
  }, [themeDark]);

  return (
    <div>
      <Navbar themeDark={themeDark} onToggleTheme={toggleTheme} />
      <Grid container>
        <Grid item sm={3} md={2} xs={2}>
          <Leftbar themeDark={themeDark} />
        </Grid>
        <Grid item sm={7} md={7} xs={10}>
          <Feed
            onDelete={deletePostYourSelf}
            dataPost={dataPost}
            themeDark={themeDark}
          />
        </Grid>
        <Grid item sm={2} md={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add onAddPost={addPost} themeDark={themeDark} />
    </div>
  );
}

export default App;
