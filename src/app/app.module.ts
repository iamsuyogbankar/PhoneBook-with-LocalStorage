import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareService } from './share.service';
import { SearchnamePipe } from './searchname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    AddcontactsComponent,
    SearchnamePipe
  ],
  imports: [
    BrowserModule,
    NgxTypeaheadModule, //for serach result
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule //for reactive form validation
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
