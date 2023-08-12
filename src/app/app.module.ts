import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './components/root/root.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { NgMaterialModule } from './custom-module/ng-material/ng-material.module';
import { HttpClientModule } from '@angular/common/http';
import { InnerComponent } from './components/table/inner/inner.component';
import { PostsComponent } from './components/table/inner/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    TableComponent,
    TitleComponent,
    InnerComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
