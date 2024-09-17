import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MailDocument = HydratedDocument<Mail>;

@Schema()
export class Mail {
  @Prop({ required: true, unique: true })
  email: string;
}

export const MailSchema = SchemaFactory.createForClass(Mail);
