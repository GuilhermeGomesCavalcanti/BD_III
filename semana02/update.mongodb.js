/* CRIAÇÃO DA CONSTANTE QUE REPESENTA O NOME DO BANCO DE DADOS: */
const database = 'BD3-AULA';

/* CRIAÇÃO DA CONSTANTE QUE REPESENTA O NOME DA COLEÇÃO DE ARQUIVOS: */
const collection = 'LIVRARIA';

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA SERÁ CRIADO */
use(database);

/* ATUALIZAÇÃO DE UM ARQUIVO DE MONGODB: */
/*
db['LIVRARIA'].update(
    {codigo: '1'},
    {$set: {titulo: 'TESTE DE ALTERAÇÂO DE TÍTULO'}}
);
*/

/* EXCLUIR UM ARQUIVO NO MONGODB: */
db['LIVRARIA'].deleteOne({codigo: '1'})

