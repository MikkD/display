import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { FormControl, TextField, Input, form } from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
  root: {
    border: 0,
    background: 'crimson',
    border: '1px solid red'
  }
});

function SomeStyledButton() {
  const classes = useStyles();
  return <Button className={classes.root}>THIS IS SOME STYLES BUTTON</Button>
}

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 130
    }
  },
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[500]
    }
  }
})

function AppMaterial() {

  const handleA = (e) => {
    e.preventDefault()
    alert('dsds')
  }
  return (
    <div className="App">
      <Container maxWidth="md">
        <ThemeProvider theme={theme}>
          <AppBar>
            dfd
          </AppBar>

          <header className="App-header">
            <SomeStyledButton />
            <TextField

              variant="outlined"
              color="secondary"
              type="email"
              label="time"
            />
            <Typography variant="h2" component="h2">
              ROCKERS
          </Typography>
            <form onSubmit={handleA}>
              <FormControl focused="true" >
                <Input placeholder="place the name" />
                <Button color="primary" onClick={handleA}>CLICK ME</Button>
              </FormControl>
            </form>
          </header>
        </ThemeProvider >

        <Grid container spacing={3} justify="center">
          <Grid item xs={12} xl={6}>
            <Paper style={{ height: 100, width: '100%', border: '2px solid green' }} />
          </Grid>
          <Grid item>
            <Paper style={{ height: 200, width: 200, border: '2px solid green' }} />
          </Grid>
          <Grid item>
            <Paper style={{ height: 200, width: 200, border: '2px solid green' }} />
          </Grid>
        </Grid>


      </Container>
    </div>
  );
}

export default AppMaterial;
