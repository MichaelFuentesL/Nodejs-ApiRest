const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Maick",
        "website": "Code.cl"
    }
    res.json(data);
});

module.exports = router;