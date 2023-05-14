const apiAdapter = require('../../api-adapter')
const {
    URL_SERVICE_USER
} = process.env
const api = apiAdapter(URL_SERVICE_USER)

module.exports = async (req, res) => {
    try {
        const token = await api.get('/refresh_token')
        return res.json(token.data)
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
