const express = require('express');
const server = express();
const cors = require('cors')
/* Peço para o servidor me fazer uma requisição usando os
parâmetros req(quando o cliente faz a requisição) e
res(quando o servidor envia para o cliente uma requisição) */

server.use(cors())

server.get('/', (req, res) => {
    res.send([
      {
        name:"iphone 14",
        URL:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fplanoscelular.claro.com.br%2Fmedias%2F18391-0-zero-300Wx300H-productCard%3Fcontext%3DbWFzdGVyfGltYWdlc3w2OTc0NHxpbWFnZS9wbmd8aGNkL2hmZi85MjY3OTY0MDE4NzE4LzE4MzkxXzBfemVyb18zMDBXeDMwMEhfcHJvZHVjdENhcmR8NGI3NDdjMWIyYWYwODEzZTQwYTY3YzRhOTc3NTc2NGFiZWJiYzBkOThlNWYwYTM4ODkwYzM3MTJlZjYwYmEzNA&tbnid=I5xAY4-JFfP4hM&vet=12ahUKEwiGtIWXjpT_AhX2ppUCHSA8DvwQMygBegUIARCkAQ..i&imgrefurl=https%3A%2F%2Fplanoscelular.claro.com.br%2FAparelhos%2FOfertas-imperd%25C3%25ADveis-de-smartphones%2FAPPLE-IPHONE-14-PRO-MAX-128GB%2Fp%2F000000000000018391&docid=Zl4KZteJT6_1HM&w=300&h=300&q=iphone%2014&ved=2ahUKEwiGtIWXjpT_AhX2ppUCHSA8DvwQMygBegUIARCkAQ'
      }
    ]);
  });

/* Declado a porta do servidor que será listada
e dou console como resposta se a conexão for feita - 
name.listen liga o servidor na porta */

const port = 9000;
server.listen(port, () => {
    console.log('Servidor rodando na porta 9000');
  });
