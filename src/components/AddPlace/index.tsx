import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

type AddPlaceProps = {
  open: boolean;
  closeDialog: (value: string) => void;
};

const tags = ["Japanese", "Ramen"];

const AddPlace = (props: AddPlaceProps) => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleTagsChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Dialog open={props.open} onClose={props.closeDialog}>
      <DialogTitle>Add Place</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          id="name"
          placeholder="Search a restaurant"
          variant="filled"
          fullWidth
        />
      </DialogContent>

      <DialogContent>
        <>*Map placeholder*</>
      </DialogContent>

      <DialogContent>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="chips">Tags</InputLabel>
          <Select
            labelId="chips"
            id="chips"
            placeholder="Add tags"
            multiple
            // variant="filled"
            value={personName}
            onChange={handleTagsChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {tags.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>

      <DialogContent>
        <Button
          color="success"
          onClick={() => {}}
          id="Add"
          variant="contained"
          fullWidth
          size="large"
        >
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlace;
