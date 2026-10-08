const con = require('../db');

const listar = (req, res) => {
    const query = 'SELECT * FROM evento;';

    con.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao buscar eventos' });
        } else {
            res.json(results);
        }
    });
};

const cadastrar = (req, res) => {
    const { nome, data, local, descricao } = req.body;

    const query = `
        INSERT INTO evento (nome, data, local, descricao)
        VALUES (?, ?, ?, ?);
    `;

    con.query(query, [nome, data, local, descricao], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao cadastrar evento' });
        } else {
            res.status(201).json({
                message: 'Evento cadastrado com sucesso',
                results
            });
        }
    });
};

module.exports = {
    listar,
    cadastrar
};