import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink} from '@angular/router'; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink 
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
