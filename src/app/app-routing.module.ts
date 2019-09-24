import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingConstants } from '@app/app-routing.constants';
import { NetlifyCmsComponent } from '@app/netlify-cms/netlify-cms.component';

const routes: Routes = [
  {
    path: AppRoutingConstants.NetlifyCms,
    component: NetlifyCmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
