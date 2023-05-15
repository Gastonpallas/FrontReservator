import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";


interface Salle {
    id: number;
    nom: string;
    nombrePlaces: number;
    videoProjecteur: boolean;
    pictureUrl: string;
    isDisponible: boolean;
}
function DetailReservation() {

    const { id } = useParams();

    const [salle, setSalle] = useState<Salle | null>(null);

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/salle/${id}`);
                const data = response.data;
                setSalle(data)
                console.log(salle)
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData();


    return (<div className="flex">
            <div className="w-3/4">
                <h1 className="text-2xl font-bold mb-4">Détail de la réservation</h1>
                {salle ? (
                    <>
                        <p className="mb-2">Nom : {salle.nom}</p>
                        <p className="mb-2">Nombre de places : {salle.nombrePlaces}</p>
                        <p className="mb-2">Vidéo-projecteur : {salle.videoProjecteur ? 'Oui' : 'Non'}</p>
                        <p className="mb-2">Disponible : {salle.isDisponible ? 'Oui' : 'Non'}</p>
                    </>
                ) : (
                    <p>Chargement des données...</p>
                )}
            </div>
            <div className="w-1/4">
                <img className="w-full" src="chemin-vers-votre-image.jpg" alt="Image de la salle" />
            </div>
        </div>

    );
}

export default DetailReservation;
