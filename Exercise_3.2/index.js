const express = require('express')
const app = express()

app.use(express.json())

let persons = [{
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
},
{
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
},
{
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
},
{
    "id": 4,
    "name": "Mary Poppendick",
    "number": "39-23-6423122"
}]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const num_people = persons.length
    const timeOfReq = new Date ();
    const message = `Phonebook has info for ${num_people}.\n ${timeOfReq}`
    response.json(message)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
