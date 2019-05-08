const express = require("express");
const cors = require("cors");
const router = express.Router();

const authRoutes = require("./authRoutes");
const tripRoutes = require("./tripRoutes");
const expRoutes = require("./expRoutes");

router.use(express.json());
router.use(cors());

router.use("/auth", authRoutes);
router.use("/user", tripRoutes);
router.use("/trips", expRoutes);

module.exports = router;
