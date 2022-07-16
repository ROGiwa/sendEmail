const express = reqire ('express');
const app = express();
const port = 3000;

app.listen (port, () => {
    console.log `nodemailer is listening at http://localhost:${port}`;
});