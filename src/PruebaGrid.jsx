import { IconButton, Typography } from "@mui/material";
import { PruebaGrid } from "../PruebaGrid";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Visibility } from "@mui/icons-material";

export const PruebaGrid = () => {
  const styles = {
    tituloUno: {
      backgroundColor: { xs: "red", md: "steelblue" },
      margin: { xs: "10px", md: "100px" },
      display: { xs: "flex", md: "none" },
    },
  };
  tituloDos = { backgroundColor: { xs: "red", md: "steelblue" } };
  tituloTres = { backgroundColor: "red" };
  return (
    <div>
      <Grid container={true}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography
            align="center"
            color="secundary"
            variant="h1" //tamaños
            sx={styles.tituloUno}
          >
            caja 1
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography sx={styles.tituloDos}>caja 2</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography sx={styles.tituloTres}>caja 3</Typography>
        </Grid>
      </Grid>
      <IconButton onClick={cambiarVisibilidad}>
        <VisibilityIcon />
      </IconButton>
    </div>
  );
};
