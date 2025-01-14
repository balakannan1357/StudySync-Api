import { IsString, IsNumber, Min, IsOptional } from 'class-validator';

export class CreateSubtopicDto {
  @IsString()
  subtopic_id: string;

  @IsString()
  subtopic_name: string;

  @IsString()
  subject: string;

  @IsNumber()
  @Min(0, { message: 'Hours cannot be less than 0' })
  no_of_hours: number;

  @IsNumber()
  @Min(0, { message: 'Number of sessions cannot be less than 0' })
  no_of_sessions: number;
}

export class UpdateSubtopicDto {
  @IsOptional()
  @IsString()
  subtopic_name?: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Hours cannot be less than 0' })
  no_of_hours?: number;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Number of sessions cannot be less than 0' })
  no_of_sessions?: number;
}
