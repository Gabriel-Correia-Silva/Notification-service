"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const in_memory_notifications_repository_1 = require("../../../notifications-services/test/repositories/in-memory-notifications-repository");
const send_notification_1 = require("../use-cases/send-notification");
describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const notificationsRespository = new in_memory_notifications_repository_1.InMemoryNotificationsRespository();
        const sendNotification = new send_notification_1.SendNotification(notificationsRespository);
        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id',
        });
        expect(notificationsRespository.notifications).toHaveLength(1);
        expect(notificationsRespository.notifications[0]).toEqual(notification);
    });
});
//# sourceMappingURL=send-notification.spec.js.map