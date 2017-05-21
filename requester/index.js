'use strict'

const API = require('./api')

const requester = new API('http://localhost:3000')

requester.makeRequest()
    .then(body => console.log(body))
    .catch(err => console.log(err))
