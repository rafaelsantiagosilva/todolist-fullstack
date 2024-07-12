const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.SERVER_PORT || 3333;

app.listen(port, () => {
     console.log(`Server is running ${port}`);
});