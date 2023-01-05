export interface NotificationProps {
    recipientId: string;
    content: string;
    category: string;
    readAt?: Date | null;
    createAt: Date;
}
export declare class Notification {
    private props;
    constructor(props: NotificationProps);
    set recipientId(recipientId: string);
    get recipientId(): string;
    set content(content: string);
    get content(): string;
    set category(category: string);
    get category(): string;
    set readAt(readAt: Date);
    get readAt(): Date | null | undefined;
    set createAt(createAt: Date);
    get createAt(): Date;
}
