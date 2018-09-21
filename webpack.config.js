const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./js/index.js",
    output: {  
      path: path.join(__dirname, "./js/"), 
      filename : 'out.js' 
    },
    watch: true,
    module: {
        rules : [
            {
                test: /\.js$/,  
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                loader: 'url-loader',    
            }
        ]
    }
};