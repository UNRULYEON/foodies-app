import { Typography, Stack, IconButton } from "@mui/material";
import { PropsWithChildren } from "react";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

type HeaderProps = {
  action?: () => void;
  ActionIcon?: typeof MoreVertRoundedIcon;
};

const Header = (props: PropsWithChildren<HeaderProps>) => {
  const { action, ActionIcon, children } = props;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={3}
      mb={1}
    >
      <Typography fontWeight="bold">{children}</Typography>
      {action && (
        <IconButton onClick={action} size="small">
          {ActionIcon ? <ActionIcon /> : <MoreVertRoundedIcon />}
        </IconButton>
      )}
    </Stack>
  );
};

export default Header;
