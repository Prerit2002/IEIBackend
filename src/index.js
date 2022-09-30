const app = require('./app')
const port = 8000


app.listen(process.env.PORT || 8000, () => {
    console.log('Server is up on port ' + port)
})