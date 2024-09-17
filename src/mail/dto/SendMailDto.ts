import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsOptional, IsPhoneNumber, IsEnum } from 'class-validator';

export enum ServiceType {
    VFX = 'Visual Effects (VFX)',
    EDITING = 'Professional Editing',
    VIDEOGRAPHY = 'Videography',
    PHOTOGRAPHY = 'Photography',
    ANIMATION = '3D Animation',
  }
  
export class SendMailDto {
  @ApiProperty({ description: 'The name of the user' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The email of the user' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The phone number of the user' })
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;

  @ApiProperty({ description: 'The service of the user' })
  @IsNotEmpty()
  @IsEnum(ServiceType)
  service: ServiceType;

  @ApiProperty({ description: 'The comment of the user' })
  @IsOptional()
  @IsString()
  comment?: string;
}

export class MailDto{
  @IsNotEmpty()
  @IsEmail()
  email: string;
}


