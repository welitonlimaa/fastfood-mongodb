// use("commerce");
db.produtos.updateMany(
  {
    valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gt: 20, $lt: 40 } } },
  },
  { $push: { tags: "contém sódio" } },
  { upsert: true },
);

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });