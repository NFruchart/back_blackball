const ProductSchema = require("../../schemas/products");

// ochestre
const Product = require("./model");

exports.getAll = async (req, res) => {
  try {
    // liste tout les produits présent dans la collection mongodb correspondant au schema produit
    const products = await ProductSchema.find();

    res.json({ status: "ok", data: products.map(p => new Product(p)) });
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.create = async (req, res) => {
  try {
    const { body } = req;
    const product = new ProductSchema({
      id: body.id,
      brand: body.brand,
      model: body.model,
      type: body.type,
      length: body.length,
      joint: body.joint,
      price: body.price,
      picture: body.picture
    });

    // insert l'objet dans mongodb
    const addProduct = await product.save();

    res.json({ status: "ok", data: new Product(addProduct) });
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.get = async (req, res) => {
  try {
    const { id } = req.params;

    // const product = data.filter(p => p.id === Number(id))[0]; // output [{id: , name:""}] , expect {id, name}
    const product = await ProductSchema.findOne({ _id : id });

    if (product) {
      res.json({ status: "ok", data: new Product(product) });
    } else {
      res.json({
        status: "error",
        message: `pas de produits avec l'id ${id}`
      });
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    // on recupére la data à modifier
    const product = await ProductSchema.findOne({ _id : id });

    if (product) {
      product.id = body.id ? body.id : product.id;
      product.brand = body.brand ? body.brand : product.brand;
      product.model = body.model ? body.model : product.model;
      product.type.butt = body.type.butt ? body.type.butt : product.type.butt;
      product.type.shaft = body.type.shaft
        ? body.type.shaft
        : product.type.shaft;
      product.length = body.length ? body.length : product.length;
      product.joint = body.joint ? body.joint : product.joint;
      product.price = body.price ? body.price : product.price;
      product.picture = body.picture ? body.picture : product.picture;

      await product.save();

      res.json({ status: "ok", data: new Product(product) });
    }else{

        res.json({
          status: "error",
          message: `pas de produits avec l'id ${id}`
        });
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    // const product = data.filter(p => p.id === Number(id))[0]; // output [{id: , name:""}] , expect {id, name}
    const product = await ProductSchema.findOne({ _id : id });

    if (product) {
      await ProductSchema.deleteOne({ _id: product._id });
      res.json({
        status: "ok",
        data: {
          message: "delete success"
        }
      });
    } else {
      res.json({
        status: "error",
        message: `pas de produits avec l'id ${id}`
      });
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
