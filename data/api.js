import axios from "axios"
const url = "http://localhost:3002";
export const getEventsByEquipe = async (equipe) => {
    const response = await axios.get(`${url}/eventsbyequipe/${equipe}`);
    return response;
};
export const getEquipesApi = async (league) => {
    const response = await axios.get(`${url}/performers/${league}`);
    return response;
};
