import { Component } from '@angular/core';

/** header menu component */

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuList = [
    { name: 'Blocks', link: '/blocks' },
    { name: 'Table', link: '/table' },
  ];
}
