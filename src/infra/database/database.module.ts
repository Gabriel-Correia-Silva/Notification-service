import { Module } from "@nestjs/common";
import { NotificationsRespository } from "src/application/repositories/notifications-respository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepositoriy } from "./prisma/repositories/prisma-notification-repository";

@Module({
    providers: [PrismaService,
        {
            provide: NotificationsRespository,
            useClass: PrismaNotificationsRepositoriy,
        },
    ],
    exports:[NotificationsRespository]
})
export class DatabaseModule {

}