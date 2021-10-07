import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {SearchComponent} from './components/search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, SearchComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService]
})
export class SharedModule {
}
