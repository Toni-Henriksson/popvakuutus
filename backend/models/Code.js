const mongoose = require("mongoose");
const CodeSchema = new mongoose.Schema({
    code: {
        type: Number,
        required: true,
    }
});

const CodeModel = mongoose.model("code", CodeSchema);
module.exports = CodeModel;