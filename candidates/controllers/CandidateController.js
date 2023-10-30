const CandidateModel = require("../../common/models/Candidate");

module.exports = {
  getAllCandidates: (req, res) => {
    //const { query: filters } = req;

    CandidateModel.findAllCandidates(req.query)
      .then((candidates) => {
        return res.status(200).json({
          status: true,
          data: candidates,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createCandidate: (req, res) => {
    const { body } = req;

    CandidateModel.createCandidate(body)
      .then((candidate) => {
        return res.status(200).json({
          status: true,
          data: candidate.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },
}