import express from 'express';
import routes from './routes/user.routes';
import contactRoutes from './routes/contact.routes'
import cors from "cors"

const app = express();
app.use(express.json())

app.use(cors(), routes)
app.use(cors(), contactRoutes)

app.listen(4000)
