import { NotificationsRespository } from "src/application/repositories/notifications-respository";
import { Notification } from "src/application/entities/notification";



export class InMemoryNotificationsRespository  
implements NotificationsRespository
{

    public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}