const express = require("express");
const router = express.Router();
const {
  concertInsert,
  concertTicket,
  concertUpdate,
  concertDelete,
} = require("../controllers/concert.controller");

router.post("/pushticket", concertInsert);
router.get("/", concertTicket);
router.put("/updateticket", concertUpdate);
router.delete("/deleteticket/:ticketid", concertDelete);

module.exports = router;
