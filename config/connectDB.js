const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB connected.');
	} catch (err) {
		console.error(err.message);
		
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;