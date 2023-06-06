const { ProdModel } = require("../../models/products.model");
const { errorService } = require("../../services");
// const { updateFavoriteSchema } = require("../../shemas");

async function updFavorite(req, res, next) {
  const { id } = req.params;
  const { favorite } = req.body;
  // const { error } = updateFavoriteSchema.validate({ favorite });

  if (!favorite) {
    throw errorService("missing field favorite", 400);
  }
  const updateStatusContact = await ProdModel.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  )
      .catch(() => {
    throw errorService(`Contact id "${req.params.id}" is not correct`, 400);
  });

  if (!updateStatusContact) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json(updateStatusContact);
}

module.exports = {
  updFavorite,
};