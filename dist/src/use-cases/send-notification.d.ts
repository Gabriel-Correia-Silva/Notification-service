import { Notification } from "src/application/entities/notification";
interface SendNotificationResquest {
    recipientId: string;
    content: string;
    category: string;
}
interface SendNotificationResponse {
    notification: Notification;
}
export declare class SendNotification {
    execute(request: SendNotificationResquest): Promise<SendNotificationResponse>;
}
export {};
