import { Injectable } from "@nestjs/common";
import { Notification } from "src/application/entities/notification";
import { NotificationsRespository } from "../../../../application/repositories/notifications-respository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepositoriy implements NotificationsRespository {

    constructor(
        private prismaService: PrismaService
    ) { }

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                createdAt: notification.createAt,
            },
        });
    }
}