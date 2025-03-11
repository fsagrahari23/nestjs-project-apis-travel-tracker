import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';
import { DestinationService } from './destination.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';

//   creating new dest 
//  fetch all
//  delete , update -.>
//  gaurd routes

@Controller('destination')
@UseGuards(JwtAuthGuard)
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}
  @Post('/add')
  create(@Request() req, @Body() createDestinationDto: CreateDestinationDto) {
    console.log(req.user)
    console.log(req?.user?.userId);
    return this.destinationService.create(
      req.user.userId,
      createDestinationDto
    );
  }

  @Get('/all')
  findAll(@Request() req) {
    return this.destinationService.findAll(req.user.userId);
  }

  @Get('/:id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.destinationService.findOne(req.user.userId, parseInt(id));
  }

  @Delete('/:id')
  removeDestination(@Request() req, @Param('id') id: string) {
    return this.destinationService.removeDestination(req.user.userId, parseInt(id));
  }

  @Patch('/:id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateDestinationDto: UpdateDestinationDto,
  ) {
    return this.destinationService.update(req.user.userId, parseInt(id), updateDestinationDto);
  }
}
