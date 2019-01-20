const fs = require('fs')

class ReadFile {
  constructor(file) {
    this.file = file

    this.processFile = this.processFile.bind(this)
    this.onReadFile = this.onReadFile.bind(this)
  }

  init() {
    return new Promise(this.processFile)
  }

  processFile(resolve, reject) {
    this.resolve = resolve
    this.reject = reject

    fs.readFile(this.file, 'utf-8', this.onReadFile)
  }

  onReadFile(error, body) {
    error ? this.reject(error) : this.resolve(body)
  }
}

module.exports = file => new ReadFile(file).init()
