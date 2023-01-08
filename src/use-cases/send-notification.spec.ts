import { InMemoryNotificationsRespository } from '../../../notifications-services/test/repositories/in-memory-notifications-repository';
import { SendNotification } from '../use-cases/send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRespository = new InMemoryNotificationsRespository();
    const sendNotification = new SendNotification(notificationsRespository);

    const {notification} = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRespository.notifications).toHaveLength(1);
    expect(notificationsRespository.notifications[0]).toEqual(notification);
  });
});
