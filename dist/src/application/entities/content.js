"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
class Content {
    get value() {
        return this.content;
    }
    validateCOntentLenght(content) {
        return content.length >= 5 && content.length <= 240;
    }
    constructor(content) {
        const isContentLenghevalid = this.validateCOntentLenght(content);
        if (!isContentLenghevalid) {
            throw new Error('Content length error.');
        }
        this.content = content;
    }
}
exports.Content = Content;
//# sourceMappingURL=content.js.map