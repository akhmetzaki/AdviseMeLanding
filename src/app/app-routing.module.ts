import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '**',
    component: MainComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
