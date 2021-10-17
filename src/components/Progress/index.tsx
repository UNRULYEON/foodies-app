import { CircularProgress, Stack } from "@mui/material";

const Progress = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <CircularProgress size={50} thickness={5} />
    </Stack>
  );
};

export default Progress;
