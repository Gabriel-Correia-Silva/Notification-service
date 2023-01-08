"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const crypto_1 = require("crypto");
class Notification {
    constructor(props) {
        var _a;
        this._id = (0, crypto_1.randomUUID)();
        this.props = Object.assign(Object.assign({}, props), { createAt: (_a = props.createAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this._id;
    }
    set recipientId(recipientId) {
        this.props.recipientId = recipientId;
    }
    get recipientId() {
        return this.props.recipientId;
    }
    set content(content) {
        this.props.content = content;
    }
    get content() {
        return this.props.content;
    }
    set category(category) {
        this.props.category = category;
    }
    get category() {
        return this.props.category;
    }
    set readAt(readAt) {
        this.props.readAt = readAt;
    }
    get readAt() {
        return this.props.readAt;
    }
    get createAt() {
        return this.props.createAt;
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map