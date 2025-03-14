require('dotenv').config();
const app = require('./src/app.js');

app.listen(3000, () => {
    console.log('listening at port 3000');
});