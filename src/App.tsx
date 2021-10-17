import Container from "@mui/material/Container";
import AppBar from "./components/AppBar";
import Stack from "@mui/material/Stack";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lists from "./components/Lists";
import Box from "@mui/system/Box";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Container maxWidth="md" sx={{ height: "100%" }}>
      <AppBar />
      {user ? (
        <Router>
          <Switch>
            <Route path="/">
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ height: "calc(100% - 80px)" }}
                spacing={{ xs: 0, sm: 3 }}
              >
                <Lists />
                <Box
                  sx={{
                    width: "1px",
                    backgroundColor: "#E0E0E0",
                    height: "calc(100% - 24px)",
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                />
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  List details here
                </Box>
              </Stack>
            </Route>
          </Switch>
        </Router>
      ) : (
        <Login />
      )}
    </Container>
  );
}

export default App;
