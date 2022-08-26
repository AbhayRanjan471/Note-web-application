const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
    //1st filed
    discription:{
        type:String,
        required: true
    },
    //2nd filed
    category:{
        type: String,
        required: true
    },
    //3rd field
    date:{
        type: String,
        required: true
    }
})

//Collection
//Since we have created the Schema , we need to tell what whould be the name of the collection which will be using the Schema , here we have given collection name as Contact
const TodoList = mongoose.model('TodoList', todoSchema);

module.exports = TodoList;