module.exports = {
    //conjunto de configurações criadas por terceiros que podemos reaproveitar em nossas aplicações
    presets: [ 
        /**converter um código do JavaScript mais moderno para um JS um pouco mais antigo, porém baseado no ambiente da nossa aplicação 
         * Por exemplo, vai verificar as funcionalidades que o browser ainda não entende, e convertê-las para a aplicação funcionar
         * Podemos utilizar no node que tem mais funcionalidades que o browser
        */
        '@babel/preset-env', 
        /**Adiciona funcionalidades do React nessa versão compatível (conversão)
        * Responsável por entender o HTML dentro do JS
        */
        '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-transform-runtime'
    ]
};