import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppBar from "./components/AppBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

function App() {
  const [user] = useAuthState(auth);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <Container maxWidth="md" sx={{ height: "100%" }}>
          <AppBar />
          {user ? (
            <Router>
              <Switch>
                <Route path="/"></Route>
              </Switch>
            </Router>
          ) : (
            <Login />
          )}
        </Container>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
