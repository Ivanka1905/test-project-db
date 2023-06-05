// const fs = require('fs/promises')
const path = require("path");
const fsp = require("fs/promises");

const filePath = path.join(__dirname, "products.json");
const findAll = async () => {
  const listOfProducts = await fsp.readFile(filePath);
  const parsed = JSON.parse(listOfProducts);
  return parsed;
};

const findOne = async (productId) => {
  const list = await findAll();
  const product = list.find((i) => i.id === productId);
  if (!product) {
    return null;
  }
  return product;
};

// const findCollection = async (productName) => {
//   const list = await findAll();
//   const product = list.filter((i) => i.name === productName);
//   if (!product) {
//     return null;
//   }
//   return product;
// };

// const removeContact = async (contactId) => {}

// const addContact = async (body) => {}

// const updateContact = async (contactId, body) => {}

module.exports = {
  findAll,
  findOne,
  // findCollection,
};
