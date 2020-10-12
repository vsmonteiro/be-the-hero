const { response } = require("express");
const connection = require("../database/connection");
const { connect } = require("../routes");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs").where("id", id).select("name").first();
    if (!ong) {
      return response.status(400).json({ error: "Could not find any ONG" });
    }

    return res.json(ong);
  },
};
