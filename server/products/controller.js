// ochestre
const Product = require("./model");
let data = [
  {
    id: 1,
    name: "test"
  },
  {
    id: 2,
    name: "test2"
  }
];

exports.getAll = (req, res) => {
  res.json(data.map(p => new Product(p)));
};

exports.create = (req, res) => {
  const { body } = req;
  const product = {
    id: body.id,
    name: body.name
  };
  // data.push(product)
  // data = data.concat(product)
  //   const newdata = [...data, product]

  //   res.json(newdata.map(p => new Product(p)));
  res.json(new Product(product));
};

exports.get = (req, res) => {
  const { id } = req.params;

  const product = data.filter(p => p.id === Number(id))[0]; // output [{id: , name:""}] , expect {id, name}

  if (product) {
    res.json(new Product(product));
  }

  throw new Error(`pas de produits avec l'id ${id}`);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const product = data.filter(p => p.id === Number(id))[0]; // output [{id: , name:""}] , expect {id, name}
  if (product) {
    product.name = body.name;
      product.id = body.id // ne pas modifé

    res.json(new Product(product));
  }

  throw new Error(`pas de produits avec l'id ${id}`);
};

exports.delete = (req, res) => {
  const { id } = req.params;

  const product = data.filter(p => p.id === Number(id))[0]; // output [{id: , name:""}] , expect {id, name}
  if (product) {
    data = data.filter(p => p.id !== Number(id))

    res.json({message: "success"});
  }

  throw new Error(`pas de produits avec l'id ${id}`);
};
