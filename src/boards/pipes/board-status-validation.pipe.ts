import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: string) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      // 유효하지 않으면
      throw new BadRequestException(`${value} isn't in the status options`);
    }
    return value;
  }

  private isStatusValid(status: any): boolean {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
