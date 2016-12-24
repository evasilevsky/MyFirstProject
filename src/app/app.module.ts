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
import { BoxModelComponent } from './box-model/box-model.component';
import { MultiColumnComponent } from './multi-column/multi-column.component';
import { PersistenceComponent } from './persistence/persistence.component';
import { HtmlComponent } from './html/html.component';

const appRoutes: Routes = [
  { path: 'example', component: ExampleComponent },
  { path: 'box-model', component: BoxModelComponent }, 
  { path: 'multi-column', component: MultiColumnComponent }, 
  { path: 'persistence', component: PersistenceComponent },
  { path: 'html', component: HtmlComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ExampleComponent,
    BoxModelComponent,
    MultiColumnComponent,
    PersistenceComponent,
    HtmlComponent
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
