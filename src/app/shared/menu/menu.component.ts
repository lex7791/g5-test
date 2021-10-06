import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList = [
    {name: 'Blocks', link: '/blocks'},
    {name: 'Table', link: '/table'},
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
