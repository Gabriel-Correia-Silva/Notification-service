export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateCOntentLenght(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLenghevalid = this.validateCOntentLenght(content);
    if (!isContentLenghevalid) {
      throw new Error('Content length error.');
    }
    this.content = content;
  }
}
