import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Mail, MailSchema } from './mail.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      },
    }),
    MongooseModule.forFeature([{name: Mail.name, schema: MailSchema}])
  ],
  providers: [MailService],
  controllers: [MailController],
})
export class MailModule {}
