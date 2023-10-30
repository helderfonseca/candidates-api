module.exports = {
  type: "object",
  properties: {
    fullName: {
      type: "string",
    },
    email: {
      type: "string",
    },
    phone: {
      type: "string",
    },
    document: {
      type: "string",
    },
  },
  required: ["fullName", "email", "phone", "document"],
  additionalProperties: false,
};