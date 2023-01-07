import { Notification } from '../entities/notification';
export declare abstract class NotificationsRespository {
    abstract create(notification: Notification): Promise<void>;
}
