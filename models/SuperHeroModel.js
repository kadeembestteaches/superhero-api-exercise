const  mongoose = require("mongoose");
const { Schema } = mongoose;

const superheroSchema = new Schema({
  
        heroName : {
            type:String,
            required : true     
        },
        realName : {
            type:String,
            required : true
        },

        age : {
            type:Number,
            required : true
        },
        gender :  {
            type:String
        },
        universeType : {
            type:String,
            required:true
        }

},{timestamps:true});


const superHeroModel = mongoose.model('Superhero', superheroSchema);


module.exports = superHeroModel;