import { IsString } from "class-validator"

export class UserDTO {
    @IsString()
    externalId: string

    @IsString()
    tgId: string

    @IsString()
    tgname: string

    @IsString()
    tgusername: string

    @IsString()
    tglanguageCode: string
}