const express = require('express') 
const hello_world = express()
hello_world.get('/', (req, res) => res.send('Hello World!')) 
hello_world.listen (3000, () => console.log('3000 server are ready'))
