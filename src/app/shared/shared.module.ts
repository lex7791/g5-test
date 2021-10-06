import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, SearchComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    SearchComponent
  ]
})
export class SharedModule {}
