const knex = require("../models/knex");

exports.concertInsert = async (req, res) => {
  try {
    const { concertName, qty, price, date } = req.body;

    if ((concertName, qty, price, date === "")) {
      res.status(400).json({
        message: "Insert failed pleas fill your input",
      });
    }

    let insertData = await knex("concert_ticket")
      .insert({
        concert_name: concertName,
        qty: qty,
        price: price,
        date: date,
      })
      .then((insertedId) => {
        return insertedId;
      });

    res.status(201).send({
      message: "Ticket success inserted",
      data: insertData,
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      status: false,
      message: error.message,
      data: null,
    });
  }
};

exports.concertTicket = async (req, res) => {
  try {
    let concertData = await knex.from("concert_ticket").select("*");

    res.status(200).json({
      message: "Data concerts success all select",
      data: concertData,
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      status: false,
      message: error.message,
      data: null,
    });
  }
};

exports.concertUpdate = async (req, res) => {
  try {
    const { id, concertName, qty, price, date } = req.body;
    let ticketUpdate = await knex("concert_ticket")
      .where({
        id: id,
      })
      .update({
        concert_name: concertName,
        qty: qty,
        price: price,
        date: date,
      });
    res.status(201).send({
      message: "Ticket success updated",
      data: ticketUpdate,
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      status: false,
      message: error.message,
      data: null,
    });
  }
};

exports.concertDelete = async (req, res) => {
  try {
    const ticketId = req.params.ticketid;
    await knex("concert_ticket")
      .where({
        id: ticketId,
      })
      .del();
    res.status(201).send({
      message: "Ticket success deleted",
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      status: false,
      message: error.message,
      data: null,
    });
  }
};
