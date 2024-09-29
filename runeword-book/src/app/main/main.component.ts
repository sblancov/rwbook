import data from '../../assets/runewords.json';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';


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
    MatGridListModule,
    MatButtonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  runewords: Runeword[] = [];
  filtered_runewords: Runeword[] = [];
  searchText: string = "";
  maxLevel: string = "";
  itemType: string = "";
  visualizationMode: string = "cards";

  constructor() {
    this.runewords = data as Runeword[];
    this.filtered_runewords = this.runewords;
    this.visualizationMode = "cards";
    this.searchText = "";
    this.maxLevel = "";
    this.itemType = "";
  }

  normalize(text: string): string {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  compare(input: string, text: string): boolean {
    return this.normalize(input).includes(this.normalize(text));
  }

  filter () {
    if (!this.searchText && !this.maxLevel && !this.itemType) {
      this.filtered_runewords = this.runewords;
      return;
    }
    // Name and attributes
    this.filtered_runewords = this.runewords
    if (this.searchText) {
      this.filtered_runewords = this.filtered_runewords.filter((runeword) =>
        this.compare(runeword?.name, this.searchText)
        || this.compare(runeword?.english, this.searchText)
        || runeword?.stats.some((value) => this.compare(value, this.searchText))
      );
    }
    // Max Level
    if (this.maxLevel) {
      this.filtered_runewords = this.filtered_runewords.filter((runeword) =>
        runeword.level <= this.maxLevel
      );
    }
    // Item Type
    if (this.itemType) {
      this.filtered_runewords = this.filtered_runewords.filter((runeword) =>
        runeword?.type.some((value) => this.compare(value, this.itemType))
      );
    }
  }

  changeMode (mode: string) {
    this.visualizationMode = mode;
  }

  clear () {
    this.searchText = "";
    this.maxLevel = "";
    this.itemType = "";
    this.filtered_runewords = this.runewords;
  }
}
