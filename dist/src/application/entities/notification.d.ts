import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createAt: Date;
}
export declare class Notification {
    private _id;
    private props;
    constructor(props: Replace<NotificationProps, {
        createAt?: Date;
    }>);
    get id(): string;
    set recipientId(recipientId: string);
    get recipientId(): string;
    set content(content: Content);
    get content(): Content;
    set category(category: string);
    get category(): string;
    set readAt(readAt: Date);
    get readAt(): Date | null | undefined;
    get createAt(): Date;
}
