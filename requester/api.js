'use strict'
const request = require('request');

class api {

  constructor(url) {
    this.url = url;
  }

  makeRequest() {
    return new Promise((resolve, reject) => {
      request(this.url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body)
        } else {
          reject(error)
        }
      })
    })
  }
}

module.exports = api
