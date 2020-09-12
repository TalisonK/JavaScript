const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
require('dotenv/config')
const Post = require('../models/Post')


mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {console.log("Conectado ao DB")})
.catch((err) => {console.log("Erro ao conectar ao DB" + err)})





// {texto, img, alternativas, resposta}
let texto = "Veja a figura abaixo e marque a alternativa que representa a imagem formada pelos objetos (letra N e relógio) quando colocado diante de um espelho plano.";
let imagem = "https://lh3.googleusercontent.com/sb7GmBY_YkvjjIfTW2yQEf2Oo_oQJ4kLY1XMrPFFjxmP1x39nfYURR7ndp33VZeoORXENaAorh0cSPhLrI0B3pVIHyBzkIpkkCu59KZarDUDNW4bGXm35hdiTWfIawCDFS7-jtHXx8hD98YIDMLWuAGW2yKt3NPd52LkCgKpr0S-RhcwqG5N05huI0MhcRzD9SPKGAcNAmRzU144zZPBsRXgrrUspi1rrxzLIZ9TCRGHoq6Glc4zLaFNvJLZAG5apXCL5z5BE_HjXqD8zNosZaEnrzC7UtKry3NMCDIVNoWKrNptuKVfc7kyjNPSjKi3nsiUKvXqSEmx_rHaHCGbQq9GpGstnMKVJQ0V7CgQIW9LY2690DkD7cICyJPETw7qUaCfHoFij2lYSNcJyVM_rl77eC2INlkvOq6JLfl0wD1T-xJywn5cz2RU_7FAbnSh5OSvuXvUOZwtinrbjOC88iX5kMOFk5zBufaOY8yU7LxBNQlcRSZRGjGQCtXej9M-C5mB6Tnoyd1A3X1feQ5UBRxgoeOKj_nrhbvHLwZ4g39vZva-zTTx-jMcGQshSmodZmJw-HnFNN71uVM190sxNYqQitXQdy-aovN52hTuG0xDvz-fjJ94EuHxqUl5EIfZHwTrEUb_sL1AtqdnzGFN7XisxPDdgFiPxXaBLe06bqgXofcLpJhrzFtqIO49cmoGM3xq=w1366-h625-ft";
let id = "0001"
let alternativas = ["https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-a.jpg", 
"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-b.jpg",
"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-c.jpg",
"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-d.jpg",
"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-e.jpg"];



function ad(data){
    const post = new Post({
        texto: texto,
        img: imagem,
        alternativas: alternativas,
        resposta: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-c.jpg",
    })
    console.log(post);
    post.save();
    let dados = {
        header: "resposta",
        body: post,
    }
    return dados;    
}

router.post("/api", (request, response) => {
    console.log("i got a request! :)");
    console.log(request.body);
    const dados = ad(request.body);
    response.status(200).send({
        header: dados.header,
        body: dados.body,
    })
})

module.exports = router