"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const app = express_1.default();
app.use(api_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    return console.log(`Started On Port: ${PORT}`);
});
//# sourceMappingURL=app.js.map