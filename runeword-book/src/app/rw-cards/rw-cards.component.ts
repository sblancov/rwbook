import { Component, Input } from '@angular/core';
import { Runeword } from '../runeword';

import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'rw-cards',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './rw-cards.component.html',
  styleUrl: './rw-cards.component.css'
})
export class RwCardsComponent {
  @Input() runewords!: Runeword[];
}
