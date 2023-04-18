// use("commerce");
db.produtos.updateMany(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);
// use("commerce");
db.produtos.find({ name: { $ne: "Big Mac" } }, { nome: 1, curtidas: 1, _id: 0 });