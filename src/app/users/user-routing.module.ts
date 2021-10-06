import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TableComponent } from './components/table/table.component';
import { DetailComponent } from './components/detail/detail.component';

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
    path: 'detail/:userName',
    component: DetailComponent,
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
