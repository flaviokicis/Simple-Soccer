import express from 'express';
import getTable from '../controllers/table-controller.js';

const router = express.Router();

router.post('/tabela', async (request, response) => {
    const sort = request.body.sortByName;
    try {
    const tableInfo = await getTable(sort);
    response.json(tableInfo);
    } catch (errorResponse) {
        console.log("Error: " + errorResponse);
        response.status(505).json({error: errorResponse.message});
    }
});

export default router;