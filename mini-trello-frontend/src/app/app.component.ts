import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [CommonModule, BoardComponent],
  schemas: [],
})
export class AppComponent implements OnInit {
  currentYear: number | undefined;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
