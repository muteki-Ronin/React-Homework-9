// STYLES
import { useStyle } from "./style";
// MUI
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";

export const UserItem = ({ item }) => {
  const classes = useStyle();
  return (
    <Grid xs={6}>
      <Paper className={classes.paper}>
        <Typography gutterBottom variant="h4" component="p">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="p">
          {item.username}
        </Typography>
        <Typography gutterBottom variant="h6" component="p">
          Email. {item.email}
        </Typography>
        <Typography gutterBottom variant="h6" component="p">
          Tel. {item.phone}
        </Typography>
      </Paper>
    </Grid>
  );
};
