import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, List } from '../list/list.component';

interface Board {
  title: string;
  lists: List[];
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass'],
  standalone: true,
  imports: [CommonModule, ListComponent],
})
export class BoardComponent {
  board: Board = {
    title: 'Board Title',
    lists: [
      { id: 1, title: 'To Do', cards: [] },
      { id: 2, title: 'In Progress', cards: [] },
      { id: 3, title: 'Done', cards: [] },
    ],
  };
}
