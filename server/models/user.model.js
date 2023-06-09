const { Schema, mongoose } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be 8 characters or longer"]
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref:"Product"
    }],
    shoppingCart: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
}, {timestamps: true});

    UserSchema.path('email').validate(async(value) => {
        const emailCount = await mongoose.models.User.countDocuments({email: value});
        return !emailCount;
    }, 'Email already exists');
    
    UserSchema.virtual('confirmPassword')
        .get(() => this._confirmPassword )
        .set(value => this._confirmPassword = value );
    
    UserSchema.pre('validate', function(next) {
        if (this.password !== this.confirmPassword) {
            this.invalidate('confirmPassword', 'Password must match confirm password');
        }
        next();
    });

    UserSchema.virtual('confirmEmail')
    .get(function() {
      return this._confirmEmail;
    })
    .set(function(value) {
      this._confirmEmail = value;
    });
  
  UserSchema.pre('validate', function(next) {
    if (this.email !== this.confirmEmail) {
      this.invalidate('confirmEmail', 'Email must match confirm Email');
    }
    next();
  });
    
    UserSchema.pre('save', function(next) {
        bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
    });
});
    
module.exports = mongoose.model('User', UserSchema);