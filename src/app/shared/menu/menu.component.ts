import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  linkActiveClass: 'active';
  menuList = [
    {name: 'Blocks', link: '/blocks'},
    {name: 'Table', link: '/table'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
