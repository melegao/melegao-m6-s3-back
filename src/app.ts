import express from 'express';
import routes from './routes/user.routes';
import contactRoutes from './routes/contact.routes'

const app = express();

app.use(express.json())

app.use(routes)
app.use(contactRoutes)

app.listen(4000)
