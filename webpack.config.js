const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/app.ts'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '/dist')
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};
