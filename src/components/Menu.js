import { Grid } from "@mui/material";
import SalleCard from "./SalleCard";
import { map } from "lodash";
import axios from "axios";
import {useState} from "react";

const SALLE = [
  { nom: "Salle A", nombrePlaces: 50, videoProjecteur: true },
  { nom: "Salle B", nombrePlaces: 30, videoProjecteur: false },
  { nom: "Salle C", nombrePlaces: 100, videoProjecteur: true },
  { nom: "Salle D", nombrePlaces: 20, videoProjecteur: false },
  { nom: "Salle E", nombrePlaces: 70, videoProjecteur: true },
  { nom: "Salle F", nombrePlaces: 40, videoProjecteur: true },
  { nom: "Salle G", nombrePlaces: 80, videoProjecteur: false },
  { nom: "Salle H", nombrePlaces: 60, videoProjecteur: true },
  { nom: "Salle I", nombrePlaces: 25, videoProjecteur: false },
  { nom: "Salle J", nombrePlaces: 90, videoProjecteur: true },
];

function Menu() {


  const [salles, setSalles] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/salle`);
      const data = response.data;
      setSalles(data)
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  fetchData();


  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      {map(salles, (salle) => {
        console.log(salle);
        return (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <SalleCard salle={salle} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Menu;
