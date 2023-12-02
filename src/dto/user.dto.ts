import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, Matches } from "class-validator";

export class UserDto{
    @IsNotEmpty()
    @IsString()
    firstName: string;
    
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, {message: 'sorry you must put in 6 characters'})
    @MaxLength(16, {message: 'sorry password higher than 16 characters'})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {message: 'password must contain atleast One Uppercase, One number and One special key'})
    password: string;

}