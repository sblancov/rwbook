import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './main/main.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'runeword-book';
}
