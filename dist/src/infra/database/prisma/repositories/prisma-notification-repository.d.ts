import { Notification } from "src/application/entities/notification";
import { NotificationsRespository } from "../../../../application/repositories/notifications-respository";
import { PrismaService } from "../prisma.service";
export declare class PrismaNotificationsRepositoriy implements NotificationsRespository {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(notification: Notification): Promise<void>;
}
