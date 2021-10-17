import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { NavLink } from "react-router-dom";
import { List } from "../../api/lists";
import "./ListCard.css";

type ListCardProps = {
  list: List;
};

const ListCard = (props: ListCardProps) => {
  const { list } = props;
  return (
    <NavLink to={`/${list.id}`} activeClassName="list-card-active">
      <Paper
        variant="outlined"
        sx={{
          cursor: "pointer",
          transition: "all 0.1s ease-in-out",
          borderWidth: "2px",
        }}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          p={"12px"}
          spacing={0}
        >
          <Typography
            fontWeight="bold"
            fontSize={18}
            component="span"
            sx={{
              overflow: "hidden",
              width: "-webkit-fill-available",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {list.name}
          </Typography>
          <Typography fontWeight="bold" fontSize={32} component="span">
            {list.places_count}
          </Typography>
          <Typography component="span">restaurants</Typography>
          <AvatarGroup max={4}>
            {list.users.map((user, key) => (
              <Avatar key={key} alt={user.name} src={user.photo_url} />
            ))}
          </AvatarGroup>
        </Stack>
      </Paper>
    </NavLink>
  );
};

export default ListCard;
