import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExampleComponent } from './example/example.component';

const appRoutes: Routes = [
  { path: 'example', component: ExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ExampleComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
