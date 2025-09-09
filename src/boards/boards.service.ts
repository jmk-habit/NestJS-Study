import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository) // Repository 상속받은 BoardRepository 주입
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } }); // 'where: {id}'란 id 컬럼이 id인 것을 찾는다는 뜻
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // // 못찾으면 NotFoundException 던지기
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Board with ID "${id}" not found`);
  //   }
  //   return found;
  // }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id); // 해당 id의 게시물이 있는지 확인
  //   this.boards = this.boards.filter((board) => board.id !== found.id); // id가 다른 것들만 남기기
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
