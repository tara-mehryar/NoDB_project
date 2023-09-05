import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import { addRecipe } from './server/Controller.js'
import { read } from './server/Controller.js'
import { editRecipe } from './server/Controller.js'
import { deleteRecipe } from './server/Controller.js'


const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

ViteExpress.config({ printViteDevServerHost: true })


app.get('/api/allRecipes',read);
app.post('/api/addRecipe',addRecipe);
app.put('/api/editRecipe/:id',editRecipe);
app.delete('/api/deleteRecipe/:id',deleteRecipe)



ViteExpress.listen(app,port, () => console.log(`Listening on http://localhost:${port}`))

