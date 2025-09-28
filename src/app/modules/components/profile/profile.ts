import { Component } from '@angular/core';
import { User } from '../../../../types/User.type';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent {
  public user:User = {
    name: 'Ewerton Hecsley',
    location: {
      city: 'Patos-PB',
      country: 'Brasil'
    }
  }

  public profiles = [
    {profileName: 'GitHub', profileUrl: 'https://github.com/EwertonHecsley'},
    {profileName: 'LinkedIn', profileUrl: 'https://www.linkedin.com/in/ewerton-hecsley-8a613992/'},
    {profileName: 'Instagram', profileUrl: 'https://www.instagram.com/ewerton_hecsley/'},
  ]
}
