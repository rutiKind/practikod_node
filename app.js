const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        debugger
        const renderResponse = await axios.get('https://api.render.com/v1/services?limit=20', {
            headers: {
                'accept': `application/json`,
                'authorization': 'Bearer rnd_iA3xZDAJLL7DJpwFarZCg1HFTWda'
            }
        });
        console.log(renderResponse);
        res.json(renderResponse.data);
    } catch (error) {
        console.error('Error ', error);
        res.status(500).json({ error: 'Failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
