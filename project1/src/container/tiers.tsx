import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import {
  Button,
  Box,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Input,
  CheckboxProps,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectObjectBar: {
      display: "flex",
      maxWidth: 450,
      margin: "0 auto",
    },
    selectObjects: {
      background: "white",
      flexBasis: 100,
      flexGrow: 1,
      overflow: "hidden",
      boxShadow: "0 1px 3px #b5b5b5",
      borderRadius: 4,
    },
    addObjects: {
      background: "green",
      flexBasis: "max-content",
      marginLeft: 5,
      borderRadius: 4,
      overflow: "hidden",
    },
    select: {
      placeholder: "Objects",
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      "& > *": {
        boxSizing: "border-box",
      },
    },
    //ajsajsaks

    wrapper: {
      marginTop: 20,
      display: "flex",
      maxWidth: 1000,
      margin: "0 auto",
      padding: " 5px 10px",
      backgroundColor: "grey",
      borderRadius: 5,
      color: "#fff",
      boxShadow: "0 1px 3px #b5b5b5",
    },
    name: {
      flexBasis: 150,
      flex: 2,
    },
    price: {
      flexBasis: 150,
      flex: 1,
    },
    fileDelivered: {
      flexBasis: 150,
      flex: 1.5,
    },
    actions: {
      flexBasis: 100,
    },
  })
);

const GreenCheckbox = withStyles({
  root: {
    "&$checked": {
      color: "green",
    },
    "& svg": {
      "& path": {
        background: "yellow",
      },
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox {...props} />);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center",
  },
  variant: "menu",
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export const Tires = () => {
  const classes = useStyles();

  const [personName, setPersonName] = React.useState<string[]>([]);
  const [selectAll, setSelectAll] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  return (
    <>
      <Box className={classes.selectObjectBar}>
        <Box className={classes.selectObjects}>
          <Select
            className={classes.select}
            multiple
            value={selectAll ? names : personName} //setSelect
            onChange={(e) => (selectAll ? null : handleChange(e))} //setSelect
            input={<Input disableUnderline={true} />}
            renderValue={(selected) => (selected as string[]).join(", ")}
            MenuProps={{}}
          >
            <button
              onClick={() => {
                setSelectAll(!selectAll);
              }}
            >
              {selectAll ? "Unselect" : "Select all!"}
            </button>
            {selectAll
              ? names.map((name) => (
                  <li value={name}>
                    <Box display="flex">
                      <Checkbox checked={true} />
                      <ListItemText primary={name} />
                    </Box>
                  </li>
                ))
              : names.map((name) => (
                  <li value={name}>
                    <Box display="flex">
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </Box>
                  </li>
                ))}
          </Select>
        </Box>
        <Box className={classes.addObjects}>
          <Button>+ Add Files</Button>
        </Box>
      </Box>
      <Box className={classes.wrapper}>
        <Box className={classes.name}>Name</Box>
        <Box className={classes.price}>Price</Box>
        <Box className={classes.fileDelivered}>File Delivered</Box>
        <Box className={classes.actions}>Actions</Box>
      </Box>
    </>
  );
};

// <MenuItem
//   style={{
//     borderBottom: "1px solid",
//     padding: "0",
//     margin: "0",
//   }}
//   key={name}
//   value={name}
// >
//   <GreenCheckbox
//     // style={{
//     //   padding: "0",
//     //   margin: "0",
//     //   color: "grey",
//     // }}
//     inputProps={{ "aria-label": "indeterminate checkbox" }}
//     checked={personName.indexOf(name) > -1}
//   />
//   <ListItemText primary={name} />
//   <button>aaaaaaaaaa</button>
// </MenuItem>
