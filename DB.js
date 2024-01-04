
import mongoose from "mongoose"
export const dbConnection=()=>{
    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }

    try {
        mongoose.connect("mongodb+srv://gokulraj:gokulraj@kitchenrecipe.w01uyzw.mongodb.net/KitchenRecipe?retryWrites=true&w=majority")
        console.log("DB connected Via Mongoose")
    } catch (error) {
        console.log(error)
        console.log("mongodb connection error")
    }
}

