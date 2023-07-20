// localhost:8000
module.exports.home = (req, res) => {
    return res.send('<h1>codeial is set to route</h1>')
}

// localhost:8000/info
module.exports.info = (req, res) => {
    return res.send('<h1>info about codeial</h1>')
}