const User = require('./model');


// craete user in model
const joe = new User({ name: 'Joe' });

joe.save()
.then((u) => console.log('Saved ', u))
.catch((err) => console.log('Err ', err));

//find all users

User.find({name: 'Joe'})
.then((users) => {
    console.log('Users ', users);
})
.catch((err) => console.log('Err ', err));

// finds user with a name
User.findOne({name: 'Joe'})
.then((user) => {
    console.log('User ', user);
})
.catch((err) => console.log('Err ', err));


//


const joe = new User({
    name: 'Joe'
});

joe.save()
    .then(() => {
        joe.remove().then().catch(err);
        User.remove({name: 'Joe'});     // also return promise
        User.findOneAndRemove({name: 'Joe'});     // also return promise
        User.findByIdAndRemove(joe._id);     // also return promise


    })
    .catch((err) => console.log('Err ', err));