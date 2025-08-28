/* CRIAÇÃO DA CONSTANTE QUE REPESENTA O NOME DO BANCO DE DADOS: */
const database = 'BD3-AULA';

/* CRIAÇÃO DA CONSTANTE QUE REPESENTA O NOME DA COLEÇÃO DE ARQUIVOS: */
const collection = 'LIVRARIA';

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA SERÁ CRIADO */
use(database);

/* SELECIONA DOCUMENTOS COM USO DO OPERADOR MAIOR &gt */
//db['LIVRARIA'].find({"valor":{$gt:100}});

/* SELECIONA DOCUMENTOS COM USO DO OPERADOR MENOR &lt */
// db['LIVRARIA'].find({"valor":{$lt:100}});

/* DEFININDO UM INTERVALO ENTRE VALORES: */
db['LIVRARIA'].find({"valor":{$gte:50, $lte:150}}) //$gte = maior igual  $lte = menor igual
              .sort({valor:-1});