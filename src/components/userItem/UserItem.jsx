// MUI
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";

export const UserItem = ({ item }) => {
  return (
    <Grid xs={6}>
      <Paper
        sx={{
          backgroundColor: "rgba(235, 160, 85, 0.6)",
          padding: "15px",
          margin: "5px",
          textAlign: "center",
        }}
      >
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
