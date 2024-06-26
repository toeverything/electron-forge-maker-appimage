"use strict";
// patch AppRun file in AppImage, so that it support Wayland
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchAppImage = void 0;
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const scriptPath = path_1.default.resolve(__dirname, "../../scripts/patch-apprun.sh");
function patchAppImage(appFileName) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, child_process_1.execSync)(`bash ${scriptPath} ${appFileName}`);
    });
}
exports.patchAppImage = patchAppImage;
//# sourceMappingURL=patch-apprun.js.map