import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
