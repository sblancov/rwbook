import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'visualization-selector',
  standalone: true,
  imports: [
    MatButtonToggleModule
  ],
  templateUrl: './visualization-selector.component.html',
  styleUrl: './visualization-selector.component.css'
})
export class VisualizationSelectorComponent {
  @Output() onVisualizationSelection = new EventEmitter<string>();
  @Input() initialMode!: string;

  onChangeMode (mode: string) {
    this.onVisualizationSelection.emit(mode);
  }

}
