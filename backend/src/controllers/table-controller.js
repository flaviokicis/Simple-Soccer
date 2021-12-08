import axios from 'axios';
import compareTeams from '../utils/sortObj.js';

const getTable = async (sortName) => {
    const config = {
        headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
    };
    try {
    const resp = await axios.get(process.env.API_ENDPOINT + '/campeonatos/10/tabela', config);
    const data = resp.data;

    // Return only necessary information
    const infoData = data.map((team) => {
        const info = {};
        info["posicao"] = team.posicao;
        info["pontos"] = team.pontos;
        info["vitorias"] = team.vitorias;
        info["derrotas"] = team.derrotas;
        info["empates"] = team.empates;
        info["nome"] = team.time.nome_popular;
        info["escudo"] = team.time.escudo;
        return info;
    });

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