const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy(
    { usernameField: 'email' },
   async (email, password, done) => {
await user = await User.findOne({ email: email });
if (!user) {
    return done(null, false, { message: 'Not user found' });
} else {
    await user.matchPassword(password);
}
}
));


