import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { companyReducer } from './store/company.reducer';
import { CompanyEffects } from './store/company.effects';
import { CompanyService } from './services/company.service';
import { CompanySearchComponent } from './components/company-search/company-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CompanySearchComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule  ,
    FormsModule,
    HttpClientModule ,
    StoreModule.forRoot({company: companyReducer}, {}),
    EffectsModule.forRoot([CompanyEffects])
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
