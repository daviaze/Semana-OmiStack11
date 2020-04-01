const crypto = require("crypto");
const connection = require("../database/connection"); //conectando com o banco de dados

module.exports = {
  async index(request, response) {
    // listagem
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      //inserindo no bd
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
