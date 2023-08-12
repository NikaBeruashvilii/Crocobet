import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { InnerComponent } from './components/table/inner/inner.component';
import { PostsComponent } from './components/table/inner/posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: TableComponent
  },
  { path: 'main/inner/:id', component: InnerComponent },
  { path: 'main/inner/:id/post/:id', component: PostsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
