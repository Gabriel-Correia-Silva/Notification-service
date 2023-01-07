"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(props) {
        var _a;
        this.props = Object.assign(Object.assign({}, props), { createAt: (_a = props.createAt) !== null && _a !== void 0 ? _a : new Date() });
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