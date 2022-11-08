import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema({
    productos: [
        {
          producto: { type: Array},
          stock: Number,
        },
      ],
    timeStamp: { type: Date, default: Date.now },
});

const CarritoModel = mongoose.model('carritos', carritoSchema);

export default CarritoModel;