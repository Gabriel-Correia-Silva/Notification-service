"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryNotificationsRespository = void 0;
class InMemoryNotificationsRespository {
    constructor() {
        this.notifications = [];
    }
    async create(notification) {
        this.notifications.push(notification);
    }
}
exports.InMemoryNotificationsRespository = InMemoryNotificationsRespository;
//# sourceMappingURL=in-memory-notifications-repository.js.map