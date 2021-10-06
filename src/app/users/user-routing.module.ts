import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TableComponent } from './components/table/table.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: 'blocks',
    component: BlocksComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: '**',
    redirectTo: '/blocks',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
