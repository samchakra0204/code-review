const aiService = require('../services/ai.services.js');

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt Needed");
    }

    const response = await aiService(code);

    res.send(response);
}