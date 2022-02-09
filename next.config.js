module.exports = {
    trailigSlash: true,
    async redirects() {
        return [
            {
                source: '/perguntas/',
                destination: '/faq/',
                permanent: true,
            }
            
        ]
    }

}