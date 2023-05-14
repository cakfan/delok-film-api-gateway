const apiAdapter = require('../../../api-adapter')
const {
    URL_SERVICE_POST
} = process.env
const api = apiAdapter(URL_SERVICE_POST)

module.exports = async (req, res) => {
    try {
        const movie = await api.get('/movie')
        return res.json(movie.data)
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'Service unavailable'
            })
        }
        const { status, data } = error.response
        return res.status(status).json(data)
    }
}
