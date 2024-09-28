import data from '../../assets/runewords.json';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


export interface Runeword {
  name: string;
  english: string;
  level: string;
  sockets: string;
  runes: string[];
  type: string[];
  stats: string[];
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  runewords: Runeword[] = [];
  filtered_runewords: Runeword[] = [];
  visualization_mode: string = "cards";

  constructor() {
    this.runewords = data as Runeword[];
    this.filtered_runewords = this.runewords;
    this.visualization_mode = "cards";
  }

  normalize(text: string): string {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  compare(input: string, text: string): boolean {
    return this.normalize(input).includes(this.normalize(text));
  }

  filterResults (text: string) {
    if (!text) {
      this.filtered_runewords = this.runewords;
      return;
    }
    this.filtered_runewords = this.runewords.filter((runeword) =>
      this.compare(runeword?.name, text)
      || this.compare(runeword?.english, text)
      || runeword?.stats.some((value) => this.compare(value, text))
    );
  }

  changeMode (mode: string) {
    this.visualization_mode = mode;
  }
}
