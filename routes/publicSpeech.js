// // Once a series of recordings is made into a session

// // Create Practicum for each session

// // Once Practicum is created....

// // Add option to analyze, which will
// // => Link to single practice analysis page (depending on user's click)

const express = require("express");
const router = express.Router();
const recordings = require("../controllers/record");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//router.get("/record", ensureAuth, recordings.loadSeshRecordings);
// const express = require("express");
// const router = express.Router();
// //const authController = require("../controllers/auth");
// // const homeController = require("../controllers/home");
// const practicaController = require("../controllers/practica");
// //const analysisController = require("../controllers/analysis");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

// router.get("/", practicaController.getPublicSpeech);
// //router.post()
// router.post("/createPracticum", ensureAuth, practicaController.createPracticum);
// //router.post("analyzePracticum", ensureAuth, practicaController.analyzePracticum);
// router.put("addTitle/:id", ensureAuth, practicaController.addTitle);
// router.delete("/deletePracticum/:id", ensureAuth, practicaController.deletePracticum);
// //router.get("/analysis", ensureAuth, analysisController.getAnalysis);