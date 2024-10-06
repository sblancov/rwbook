import { Component, Input } from '@angular/core';
import { Runeword } from '../runeword';

@Component({
  selector: 'rw-table',
  standalone: true,
  imports: [],
  templateUrl: './rw-table.component.html',
  styleUrl: './rw-table.component.css'
})
export class RwTableComponent {
  @Input() runewords!: Runeword[];
}
