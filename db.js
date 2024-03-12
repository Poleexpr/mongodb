const { MongoClient } = require('mongodb')

const URL = 'mongodb://localhost:27017/movieBox'

let dbConnection

module.exports = {
	connectToDb: (cd) => {
		MongoClient.connect(URL).then((client) => {
			console.log('Connected')
			dbConnection = client.db()
			return cd()
		}).catch((err) => {
			return cd(err)
		})
	},
	getDb: () => dbConnection
}