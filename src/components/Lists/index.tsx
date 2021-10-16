import Box from "@mui/material/Box";
import Header from "../Header";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Lists = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "380px" }}>
      <Header action={() => {}} ActionIcon={AddRoundedIcon}>
        My lists
      </Header>
    </Box>
  );
};

export default Lists;
