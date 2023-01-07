"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendNotification = void 0;
const content_1 = require("../application/entities/content");
const notification_1 = require("../application/entities/notification");
class SendNotification {
    constructor(notificationsRespository) {
        this.notificationsRespository = notificationsRespository;
    }
    async execute(request) {
        const { recipientId, content, category } = request;
        const notification = new notification_1.Notification({
            recipientId,
            content: new content_1.Content(content),
            category,
        });
        await this.notificationsRespository.create(notification);
        return {
            notification,
        };
    }
}
exports.SendNotification = SendNotification;
//# sourceMappingURL=send-notification.js.map