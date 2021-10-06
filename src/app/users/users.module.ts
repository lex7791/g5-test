import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TableComponent } from './components/table/table.component';
import { DetailsComponent } from './components/details/details.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [BlocksComponent, TableComponent, DetailsComponent],
  providers: [],
  imports: [CommonModule, UserRoutingModule],
})
export class UsersModule {}
