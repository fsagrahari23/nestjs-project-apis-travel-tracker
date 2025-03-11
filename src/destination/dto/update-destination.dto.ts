import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateDestinationDto } from "./create-destination.dto";
import { PartialType } from "@nestjs/mapped-types"

export class UpdateDestinationDto extends PartialType(CreateDestinationDto) {}