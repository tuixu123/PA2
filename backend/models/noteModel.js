const mongooese = require("mongoose");

const noteSchema = mongooese.Schema(
  {
    user: {
      type: mongooese.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    ticket: {
      type: mongooese.Schema.Types.ObjectId,
      required: true,
      ref: "Ticket",
    },
    text: {
      type: String,
      required: [true, "Please add some text"],
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    staffId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongooese.model("Note", noteSchema);
