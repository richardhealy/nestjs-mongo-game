import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PlayerDto {
  @IsOptional()
  @IsNumber()
  public page?: number;

  @IsOptional()
  @IsNumber()
  public limit?: number;

  @IsOptional()
  @IsString()
  operatorGameType: string;

  @IsOptional()
  @IsString()
  operatorName: string;

  @IsOptional()
  @IsString()
  operator: string;

  @IsOptional()
  @IsString()
  sortBy: string;

  @IsOptional()
  @IsString()
  sortDir: string;
}
