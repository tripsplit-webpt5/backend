const express = require("express");
const cors = require("cors");
const router = express.Router();

const authRoutes = require("./authRoutes");
const tripRoutes = require("./tripRoutes");
const expRoutes = require("./expRoutes");

router.use(express.json());
router.use(cors());

router.use("/auth", authRoutes);
// router.use("/trip", tripRoutes);
// router.use("/expense", expRoutes);

module.exports = router;
