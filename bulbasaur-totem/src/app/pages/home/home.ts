import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [BrowserAnimationsModule, MatButtonModule, MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
