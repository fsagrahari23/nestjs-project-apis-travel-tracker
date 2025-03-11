import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';

@Injectable()
export class DestinationService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, createDestinationDto: CreateDestinationDto) {
    const { travelDate, notes, ...otherData } = createDestinationDto;
    console.log(userId);
    try {
      return await this.prisma.destination.create({
        data: {
          ...otherData,
          travelDate: new Date(travelDate), // Prisma handles conversion
          userId,
          notes, // No need for conditional check; Prisma allows `undefined`
        },
      });
    } catch (error) {
      throw new BadRequestException(`Error creating destination: ${error.message}`);
    }
  }

  async findAll(userId:number){
    return this.prisma.destination.findMany({where:{userId}});
  }

  async findOne(userId: number,id: number) {  const destination = await this.prisma.destination.findFirst({where:{id , userId}});
    if(!destination){
      throw new BadRequestException('Destination not found');
    }
    return destination; 
  }

  async removeDestination(userId: number, id: number) {
    const destination = await this.prisma.destination.findFirst({where:{id , userId}});
    if(!destination){
      throw new BadRequestException('Destination not found');
    }
    return this.prisma.destination.delete({where:{id}});
  }

  async update(userId: number,id: number, updateDestinationDto: UpdateDestinationDto) {
    await this.findOne(userId,id);
    return this .prisma.destination.update({where:{id},data:updateDestinationDto});
  }

  }

