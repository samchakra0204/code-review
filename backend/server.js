require('dotenv').config();
const app = require('./src/app.js');

/*app.listen(3000, () => {
    console.log('listening at port 3000');
});*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});
