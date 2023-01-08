import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private _id: string;

  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props, createAt: props.createAt ?? new Date(),

    };
  }
  //ID
  public get id(): string {
    return this._id;
  }

  //RecipientId
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }

  //Content
  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }

  //Category
  public set category(category: string) {
    this.props.category = category;
  }
  public get category(): string {
    return this.props.category;
  }

  //ReadAt
  public set readAt(readAt: Date) {
    this.props.readAt = readAt;
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  //CreateAt
  public get createAt(): Date {
    return this.props.createAt;
  }
}
