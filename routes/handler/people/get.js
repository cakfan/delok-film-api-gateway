const apiAdapter = require('../../api-adapter')
const {
    URL_SERVICE_PEOPLE
} = process.env
const api = apiAdapter(URL_SERVICE_PEOPLE)

module.exports = async (req, res) => {
    try {
        const people = await api.get('/people')
        return res.json(people.data)
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
