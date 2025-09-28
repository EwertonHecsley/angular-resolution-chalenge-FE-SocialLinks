import { Component } from '@angular/core';
import { ProfileComponent } from '../../components/profile/profile';

@Component({
  selector: 'app-home',
  imports: [ProfileComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
