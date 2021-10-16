import { styled } from "@mui/material/styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const AppBar = () => {
  const [user] = useAuthState(auth);

  return (
    <StyledHeader>
      <StyledAppName>mijnfood</StyledAppName>
      {user && (
        <>
          <div>search</div>
          <div>invites</div>
          <div>profile</div>
        </>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled("header")(() => ({
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  height: "80px",
  gap: "24px",
}));

const StyledAppName = styled("h1")(() => ({
  flexGrow: 1,
}));

export default AppBar;
