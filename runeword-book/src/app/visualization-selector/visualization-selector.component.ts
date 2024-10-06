import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'visualization-selector',
  standalone: true,
  imports: [
    MatIconModule,
  ],
  templateUrl: './visualization-selector.component.html',
  styleUrl: './visualization-selector.component.css'
})
export class VisualizationSelectorComponent {
  @Output() onVisualizationSelection = new EventEmitter<string>();

  changeMode (mode: string) {
    this.onVisualizationSelection.emit(mode);
  }
}
