import { Body, Controller, Post } from '@nestjs/common';
import { SendMailDto, MailDto } from './dto/SendMailDto';
import { MailService } from './mail.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('mail')
export class MailController {
    constructor(private readonly mailService: MailService){}

    @ApiOperation({ summary: 'Send mail when user provides the data' })
    @ApiResponse({ status: 200, description: 'Sent Email' })
    @Post('/send_mail')
    sendMail(@Body() body: SendMailDto){
        this.mailService.sendMail(body)
    }

    @ApiOperation({ summary: 'Save email to database' })
    @ApiResponse({ status: 200, description: 'Email' })
    @Post("/save_user_mail")
    async saveUserMail(@Body() dto:MailDto){
        console.log(dto.email)
        const savedMail = await this.mailService.saveMailToDB(dto.email);
        return savedMail;
    }
}
