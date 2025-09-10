import { IsString, MaxLength, MinLength, Matches } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // 영어, 숫자만 가능한 유효성 체크
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/, {
    message: '영어와 숫자를 포함한 4자리 이상의 비밀번호를 입력해주세요.',
  })
  password: string;
}
