import { NotificationsRespository } from "src/application/repositories/notifications-respository";
import { Notification } from "src/application/entities/notification";
export declare class InMemoryNotificationsRespository implements NotificationsRespository {
    notifications: Notification[];
    create(notification: Notification): Promise<void>;
}
