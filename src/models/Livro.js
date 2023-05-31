import mongoose from "mongoose";

const livroShema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: String, required: true},
        numeroPagina: {type: Number},
    }
);

const livros = mongoose.model('livros', livroShema);

export default livros;