import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../firebase";
import { createNewUser, NewUser } from "../../api/user";
import { useSnackbar } from "notistack";
import { doc, getDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/userinfo.email");
provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const SigninWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const existingUserRef = doc(db, "users", result.user.email!);
        const existingUserSnap = await getDoc(existingUserRef);

        if (existingUserSnap.exists()) {
          enqueueSnackbar("You've been logged in!", { variant: "success" });
          console.log("Document data:", existingUserSnap.data());
        } else {
          const newUser: NewUser = {
            email: result.user.email!,
            name: result.user.displayName || "",
            photo_url: result.user.photoURL || "",
          };

          await createNewUser(newUser)
            .then(() =>
              enqueueSnackbar("You've been logged in!", { variant: "success" })
            )
            .catch(() =>
              enqueueSnackbar("There was a problem creating your data", {
                variant: "error",
              })
            );
        }
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        enqueueSnackbar("There was a problem logging in", {
          variant: "error",
        });
      });
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: "calc(100% - 80px)" }}
    >
      <Button onClick={SigninWithGoogle}>Login with Google</Button>
    </Stack>
  );
};

export default Login;
