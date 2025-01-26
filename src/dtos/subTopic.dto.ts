import { IsString, IsNumber, Min, IsOptional } from 'class-validator';

export class CreateSubTopicDto {
  @IsString()
  _id: string;

  @IsString()
  name: string;

  @IsString()
  subject: string;

  @IsNumber()
  @Min(0, { message: 'Hours cannot be less than 0' })
  noOfHours: number;

  @IsNumber()
  @Min(0, { message: 'Number of sessions cannot be less than 0' })
  noOfSessions: number;
}

export class UpdateSubTopicDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Hours cannot be less than 0' })
  noOfHours?: number;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Number of sessions cannot be less than 0' })
  noOfSessions?: number;
}
