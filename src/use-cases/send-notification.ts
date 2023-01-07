import { Content } from "src/application/entities/content";
import { Notification } from "src/application/entities/notification";

interface SendNotificationResquest{
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse{
    notification: Notification;
}

export class SendNotification{



    async execute(request : SendNotificationResquest): Promise<SendNotificationResponse> {
        const{recipientId, content, category} = request;

        const notification = new Notification({
            recipientId,
            content : new Content(content),
            category, 
        });

        return{
            notification,
        };
    }
}