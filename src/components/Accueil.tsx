
function Accueil() {


    return (

        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Bienvenue</h1>
                <p className="text-lg">Réservez votre salle dès maintenant !</p>
                <a href=""
                    className="bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-green-600 hover:border-green-500 rounded">
                    Start
                </a>
            </div>
        </div>


    );
}

export default Accueil;