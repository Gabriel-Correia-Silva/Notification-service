import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/use-cases/send-notification';
export declare class NotificationsController {
    private sendNotification;
    constructor(sendNotification: SendNotification);
    create(body: CreateNotificationBody): Promise<{
        notification: import("../../../application/entities/notification").Notification;
    }>;
}
