import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDestinationDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsDateString() // Ensures valid date format
  travelDate: string;

  @IsOptional()
  @IsString()
  notes: string;

}