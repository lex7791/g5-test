import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, SearchComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [HeaderComponent, SearchComponent, FormsModule, ReactiveFormsModule],
  providers: [AuthService, StorageService],
})
export class SharedModule {}
