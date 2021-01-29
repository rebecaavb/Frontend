const path = require('path');

module.exports = {

    //O caminho pro diretório que contém os arquivos públicos da tua aplicação
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },

    /**Arquivo de entrada da nossa aplicação
    *É o src/index.js - primeiro arquivo a ser carregado pela aplicação
    *__dirname = quero começar pelo diretório que esse arquivo do webpack está
    *caminho ---> frontend/src/index.js*/
    entry: path.resolve(__dirname, 'src', 'index.js'),
    //Qual arquivo será gerado depois da conversão e onde será localizado
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                //A string DEVE terminar com .js
                test: /\.js$/,
                //Quando importarmos arquivos js que está dentro da node_modules, eu NÃO quero que ele passe pelo processo do babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    //Pegar o .css gerado (interpretado) e injetar dentro do HTML
                    { loader: 'style-loader' },
                    //Pega o arquivo .css e ver as importações dele e passar novamente pelo webpack
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    { loader: 'file-loader' },
                ]
            }
        ]
    }
};