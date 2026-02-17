import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" height="20" width="20" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt"  height="20" width="30"/>
      </li>
    </ul>
  <div class="image-container">
  <img ngSrc="www.example.com/image.png" height="30" width="30" priority />
</div>

  `,
  
  
})
export class User {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
