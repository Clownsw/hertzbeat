import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomComponent } from './custom/custom.component';
import { SettingTagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: 'tags', component: SettingTagsComponent },
  { path: 'custom', component: CustomComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule {}
