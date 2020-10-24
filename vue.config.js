module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Portfolio: Tyson McCarney',
        },
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /me\d*\.png/, // <= modify this to suit your needs
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 4096,
                                fallback: {
                                    loader: "file-loader",
                                    options: {
                                        name: "img/[name].[ext]", // <= note how the hash is removed
                                    },
                                },
                            },
                        },
                    ],
                },
            ],
        },
    }
}