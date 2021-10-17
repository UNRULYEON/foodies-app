import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "../Header";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { UseUserListsSnapshot } from "../../api/lists";
import ListCard from "../ListCard";
import Progress from "../Progress";

const Lists = () => {
  const [user] = useAuthState(auth);
  const [lists, loading] = UseUserListsSnapshot(user.email!);

  return (
    <Box sx={{ width: "100%", maxWidth: "380px" }}>
      <Header action={() => {}} ActionIcon={AddRoundedIcon}>
        My lists
      </Header>
      {!loading ? (
        <>
          {
            <Grid container spacing={3}>
              {lists.map((list) => (
                <Grid item xs={6} key={list.id}>
                  <ListCard list={list} />
                </Grid>
              ))}
            </Grid>
          }
        </>
      ) : (
        <Progress />
      )}
    </Box>
  );
};

export default Lists;
