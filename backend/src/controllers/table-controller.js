import axios from 'axios';
import compareTeams from '../utils/sortObj.js';

// Get table info
const getTable = async (sortName) => {
    const config = {
        headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
    };
    try {
    // Magic Number 10: ID of current tournament, this could be custom in the future
    const resp = await axios.get(process.env.API_ENDPOINT + '/campeonatos/10/tabela', config);
    const data = resp.data;

    // Return only necessary information
    const infoData = data.map((team) => (
        {
            posicao: team.posicao,
            pontos: team.pontos,
            vitorias: team.vitorias,
            derrotas: team.derrotas,
            empates: team.empates,
            nome: team.time.nome_popular,
            escudo: team.time.escudo
        }
    ));

    // Sort
    if (sortName === true)
    infoData.sort(compareTeams);
    return infoData;

    } catch (error) {
        console.log(error);
        return undefined;
    }
};

export default getTable;
