/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Body, Delete, Param, Post, Put, UseGuards} from '@nestjs/common/decorators';
import { Cliente } from 'src/schemas/cliente.schema';
import { ClienteService } from './cliente.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
/* import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth() */
@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService) {}
    @UseGuards(JwtAuthGuard)
    @Get()
    getClientes() {
      return this.clienteService.getClientes();
    }
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getCliente(@Param('id') id: string) {
      return this.clienteService.getCliente(id);
    }
    @UseGuards(JwtAuthGuard)
    @Post()
    createCliete(@Body() cliente: Cliente){
    return this.clienteService.createCliente(cliente);
    }
    
    @Put('/:id')
    updateLibro(@Param('id') id : string, @Body() cliente: Cliente ){
      return this.clienteService.updateCliente(id, cliente);
    }
  
/*     @Delete('/:id')
    deleteLibros(@Param('id') id: string) {
    return this.librosService.deleteLibro(id);
    } */
}
