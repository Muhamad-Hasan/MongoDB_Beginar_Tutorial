const mongoose = require('mongoose');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// craete connection 
mongoose.connect('url')

mongoose.connection
	.once('open', () => {
		
		const UserSchema = new Schema({
			name: String
		});
		
		const User = mongoose.model('user', UserSchema);


		const joe = new User({ name: 'Usuf' });
		console.log(joe.isNew);
		joe.save()
		.then((u) => {
			console.log('Saved ', u)
			console.log(joe.isNew);
		})
		.catch((err) => console.log('Err ', err));

	})
	.on('error', (err) => {
		console.log('Err: ', err);
	})



//drop user collecction


mongoose.connection.collections.users.drop();