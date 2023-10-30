const router = require("express").Router();
const CandidateController = require('./controllers/CandidateController');

const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");

// JSON Schema Imports for payload verification
const createCandidatePayload = require("./schemas/createCandidatePayload");

router.get(
  "/",
  CandidateController.getAllCandidates
);

router.post(
  "/",
  [SchemaValidationMiddleware.verify(createCandidatePayload)],
  CandidateController.createCandidate
);

module.exports = router;