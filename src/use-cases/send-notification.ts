import { Injectable } from '@nestjs/common';
import { Content } from '../../src/application/entities/content';
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

@Injectable()
export class SendNotification {
  constructor(private notificationsRespository: NotificationsRespository) { }

  async execute(
    request: SendNotificationResquest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRespository.create(notification);

    return {
      notification,
    };
  }
}
