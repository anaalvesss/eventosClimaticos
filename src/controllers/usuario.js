const con = require('../db');

const listar = (req, res) =>{
    const query = 'SELECT * FROM usuario;'
    con.query(query, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: ' Erro ao buscar usuarios'})
        }else{
            res.json(results)
        }
    })
}

const cadastrar = (req, res) => {
    const {nome, email, senha} = req.body
    const query = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, password(?));'
    con.query(query, [nome, email, senha], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500). json({ error: 'Erro ao cadastrar usuario'})
        }else{
            res.status(201).json({message: 'Usuario cadastrado com sucesso', results})
        }
    })
}
module.exports = {
    listar
}