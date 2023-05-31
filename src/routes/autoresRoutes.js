import express from 'express';
import AutorController from '../controllers/autoresController.js';

const router = express.Router();

router
    .get('/autores', AutorController.listarAutor )
    .get('/autores/:id', AutorController.listarAutorPorId)
    .post('/autores', AutorController.cadastrarAutores)
    .put('/autores/:id', AutorController.atualizarAutor)
    .delete('/autores/:id', AutorController.excluirAutor)

export default router;