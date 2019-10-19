import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { OneComponentComponent } from './components/one-component/one-component.component';
import { TwoComponentComponent } from './components/two-component/two-component.component';
import { ChildOneComponentComponent } from './components/child-one-component/child-one-component.component';
import { APP_ROUTING } from './app.routes';
import { ThreeComponentComponent } from './components/three-component/three-component.component'
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OneComponentComponent,
    TwoComponentComponent,
    ChildOneComponentComponent,
    ThreeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
