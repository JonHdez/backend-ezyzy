/* eslint-disable prettier/prettier */
import { Token } from './../schemas/token.schema';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Cliente } from '../schemas/cliente.schema';
import { Body, Post } from '@nestjs/common/decorators';
import { Admin } from 'src/schemas/admin.schema';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @Post('registerCliente')
    registerCliente(@Body() cliente:Cliente) {
        return this.authService.registerCliente(cliente)
    }
    @Post('registerAdmin')
    registerAdmin(@Body() admin:Admin) {
        return this.authService.registerAdmin(admin)
    }
    @Post('loginCliente')
    loginCliente(@Body() cliente:Cliente) {
        return this.authService.loginCliente(cliente)
    }
    @Post('loginAdmin')
    loginAdmin(@Body() admin:Admin) {
        return this.authService.loginAdmin(admin)
    }

    @Post('yo')
    decodeToken(@Body() token:Token){
        return this.authService.decodeToken(token.token)
    }
}
