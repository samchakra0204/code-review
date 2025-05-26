require('dotenv').config();
const app = require('./src/app.js');

const PORT = process.env.PORT || 3000; // ✅ fixed: use port 3000

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});
