const express = require('express')
const User = require('./models/User')

const app = express()

app.use(express.json());

let users = []

app.get('/', (request, response) => {
    return response.send('Hello from Users CRUD example')
})

app.get('/users', (request, response) => {
    return response.json(users)
})

app.get('/users/:id', (request, response) => {
    const id = request.params.id
    const user = users.find(user => user.id == id)
    if (!user) {
        return response.status(404).json({
            "message": `user with id ${id} not found`
        })
    }
    return response.json(user)
})

app.post('/users', (request, response) => {
    const name = request.body.name
    const email = request.body.email
    const id = Math.floor(Math.random() * 999999999)
    const newUser = new User(id, name, email)
    users.push(newUser)
    return response.json(newUser)
})

app.put('/users/:id', (request, response) => {
    const id = request.params.id
    const name = request.body.name
    const email = request.body.email
    const user = users.find(user => {
        const isFound = user.id == id
        if (isFound) {
            user.name = name
            user.email = email
        }
        return isFound
    })
    if (!user) {
        return response.status(404).json({
            "message": `user with id ${id} not found`
        })
    }
    return response.json(user)
})

app.delete('/users/:id', (request, response) => {
    const id = request.params.id
    let deletedUser = undefined
    users = users.filter(user => {
        const isFound = user.id == id
        if (isFound) {
            deletedUser = user
        }
        return !isFound
    })

    if (!deletedUser) {
        return response.status(404).json({
            "message": `user with id ${id} not found`
        })
    }
    return response.json(deletedUser)
})

app.listen(3000, () => {
    console.log(`Users CRUD Example listening on http://localhost:3000/`)
})
