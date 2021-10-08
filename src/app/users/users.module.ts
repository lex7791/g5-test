import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TableComponent } from './components/table/table.component';
import { DetailComponent } from './components/detail/detail.component';
import { UsersHttpService } from './services/users-http.service';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlocksComponent, TableComponent, DetailComponent],
  providers: [UsersHttpService],
  imports: [CommonModule, UserRoutingModule, FormsModule, SharedModule],
})
export class UsersModule {}
