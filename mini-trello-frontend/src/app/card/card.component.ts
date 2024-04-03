import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  standalone: true,
  imports: [CommonModule],
})
export class CardComponent {
  @Input() card: any;
  @Output() cardDeleted = new EventEmitter<string>();

  deleteCard() {
    this.cardDeleted.emit(this.card._id);
  }
}
