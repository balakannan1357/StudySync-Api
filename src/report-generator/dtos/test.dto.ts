import { IsString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
