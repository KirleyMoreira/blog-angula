import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  socialMediaList = [
    {
      social: "Github",
      link: "https://github.com/KirleyMoreira"
    },
    {
      social: "LinkedIn",
      link: "https://www.linkedin.com/in/kirley-moreira-a74ab61b6/"
    }
    
  ]

}
