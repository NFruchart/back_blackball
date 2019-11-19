// definir le schema de sorti de la donnée

class Product {
  constructor(product) {
    this.mongoId = product._id;
    this.id = product.id;
    this.brand = product.brand;
    this.model = product.model;
    this.type = product.type;
    this.length = product.length;
    this.join = product.joint;
    this.price = product.price;
    this.picture = product.picture;
  }
}

module.exports = Product;
