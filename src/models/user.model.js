import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }

})
userSchema.pre("save", async function (next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
        }
        next();
        });
        userSchema.methods.comparePassword = async function (password) {
            return await bcrypt.compare(password, this.password);
            }

            userSchema.methods.generateAccessToken = function(){
                return jwt.sign(
                    {
                        _id: this._id,
                        email: this.email,
                        username: this.username,
                        fullname: this.fullname

                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn: "1h"
                    }
                )
            }
            userSchema.methods.generateRefreshToken = function(){
                return jwt.sign(
                    {
                        _id: this._id,

                    },
                    process.env.REFRESH_TOKEN_SECRET,
                    {
                        expiresIn: "1h"
                    }
                )
            }
export const User = mongoose.model("User", userSchema)
