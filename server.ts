import express, {Request, Response} from 'express';
import {getHtml} from "./render-email";
import * as path from "node:path";

const app = express();
const port = process.env.PORT || 3001;


app.get('/', async (req: Request, res: Response) => {
    const html = await getHtml('hello');
    res.send(html);
});

//
// app.get('/export', async (req: Request, res: Response) => {
//     const htmlFile = path.join(__dirname,'./react-email-starter/out/plaid-verify-identity.html');
//     console.log(htmlFile)
//     res.sendFile(htmlFile);
// });
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});