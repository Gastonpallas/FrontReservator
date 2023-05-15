import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";

export default function SalleCard(props) {
  const { salle } = props;

  console.log(salle);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ padding: 20 }}
    >
      <Grid
        item
        xs={12} sm={10} md={10} lg={8}
        style={{
          display: "flex",
          flexDirection: "row",
          borderRadius: 5,
          backgroundColor: "#FADED7",
          padding: 10,
          boxShadow: '2px 2px 5px #c9c9c9',
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 151, borderRadius: 1 }}
          image="https://commune-taule.fr/wp-content/uploads/2018/05/20180518_120835-1.jpg"
          alt="Live from space album cover"
        />
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          style={{ paddingLeft: 10 }}
        >
          <Typography
            component="div"
            variant="h5"
            style={{ alignSelf: "flex-start" }}
          >
            {salle.nom}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            component="div"
            style={{ alignSelf: "flex-start" }}
          >
            {salle.nombrePlaces} places
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            style={{ alignSelf: "flex-start" }}
          >
            <CircleIcon
              style={{
                fontSize: 20,
                color: salle.videoProjecteur ? "green" : "red",
                paddingRight: 5
              }}
            />
            {salle.videoProjecteur ? "Disponible" : "Indisponible"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
