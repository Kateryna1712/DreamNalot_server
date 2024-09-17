import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendMailDto, MailDto } from './dto/SendMailDto';
import { Model } from 'mongoose';
import { Mail, MailDocument } from './mail.schema'; 
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class MailService {
    constructor(private readonly mailerService:MailerService,
        @InjectModel(Mail.name) private mailRepository: Model<MailDocument>
    ){}
    
    sendMail(dto: SendMailDto){
        this.mailerService.sendMail({
            to:'katrinmatyash01@gmail.com',
            from:process.env.EMAIL,
            subject:'Message',
            text:`${dto.service}`,
            html:`<body>
            <h1>${dto.name}</h1>
            <h2>${dto.email}</dto>
            <h2>${dto.phoneNumber}</h2>
            <div>
            ${dto.comment}
            </div>
            </body>`
        });
    }

    async saveMailToDB(email: string){
        console.log(email)
        try{
            const user=await this.mailRepository.create({
                email:email
            });
            return user;
        }
        catch(e){
            console.log(e);

            throw e;
        }
        
    }
}
