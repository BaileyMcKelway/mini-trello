import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

interface Card {
  id: string;
  title: string;
}

export interface List {
  id: number;
  title: string;
  cards: Card[];
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
})
export class ListComponent {
  @Input() list!: List;
  @Output() listDeleted = new EventEmitter<number>();

  newCardTitle = '';

  addCard() {
    if (this.newCardTitle.trim()) {
      const newCard: Card = {
        id: Date.now().toString(),
        title: this.newCardTitle.trim(),
      };
      this.list.cards.push(newCard);
      this.newCardTitle = '';
    }
  }

  deleteCard(cardId: string) {
    this.list.cards = this.list.cards.filter((card) => card.id !== cardId);
  }

  deleteList() {
    this.listDeleted.emit(this.list.id);
  }
}
