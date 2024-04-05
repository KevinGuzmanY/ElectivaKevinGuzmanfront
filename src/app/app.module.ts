import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { InfocardComponent } from './components/infocard/infocard.component';
import { SupplyComponent } from './components/supply/supply.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewListComponent,
    AddComponent,
    EditComponent,
    FooterComponent,
    InfocardComponent,
    SupplyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
