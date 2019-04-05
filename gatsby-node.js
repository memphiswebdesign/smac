exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /compressed\.js/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}
