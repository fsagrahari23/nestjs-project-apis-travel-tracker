import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Ensure the decorator is used correctly
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
