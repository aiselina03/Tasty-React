import express from "express";
import cors from "cors";
import mongoose, { Schema } from "mongoose";
const app = express();
const port = 9000;
app.use(express.json());
app.use(cors());

const tastySchema = new Schema({
  name: String,
  image: String,
  desc: String,
  price: Number
});
const TastyModel = mongoose.model("TastyModel", tastySchema);

app.get("/", async(req, res) => {
    try {
        const products = await TastyModel.find({})
         res.json(products);
    } catch (error) {
        res.send(error.message)
    }
 
});
app.get("/:id", async(req, res) => {
    try {
        const {id} = req.params
        const products= await TastyModel.findById(id)
         res.json(products);
    } catch (error) {
        res.send(error.message)
    }
});

app.post("/", async(req, res) => {
    try {
        const {name, price,image, desc}= req.body
        const newProducts= new TastyModel({name, price,image, desc})
        await newProducts.save()
         res.json(newProducts);
    } catch (error) {
        res.send(error.message)
    }
});

app.put("/:id",async (req, res) => {
    try {
        const {id} = req.params
        const {name, price,image, desc}= req.body
        const products= await TastyModel.findByIdAndUpdate(id, {name, price,image, desc})
         res.json(products);
    } catch (error) {
        res.send(error.message)
    }
});

app.delete("/:id", async(req, res) => {
    try {
        const {id} = req.params
        const products= await TastyModel.findByIdAndDelete(id)
         res.json(products);
    } catch (error) {
        res.send(error.message)
    }
});

mongoose
  .connect("mongodb+srv://Aysel:tahirova2003@mycluster.dg6gk9i.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("not Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
