import { Notification } from 'src/application/entities/notification';
import { NotificationsRespository } from 'src/application/repositories/notifications-respository';
interface SendNotificationResquest {
    recipientId: string;
    content: string;
    category: string;
}
interface SendNotificationResponse {
    notification: Notification;
}
export declare class SendNotification {
    private notificationsRespository;
    constructor(notificationsRespository: NotificationsRespository);
    execute(request: SendNotificationResquest): Promise<SendNotificationResponse>;
}
export {};
