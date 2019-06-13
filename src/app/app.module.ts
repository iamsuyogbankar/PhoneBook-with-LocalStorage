import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareService } from './share.service';
import { SearchnamePipe } from './searchname.pipe';
// search module
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    Ng2SearchPipeModule,
    ReactiveFormsModule //for reactive form validation
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
