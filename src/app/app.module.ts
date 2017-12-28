///<reference path="../../node_modules/@angular/router/src/router_module.d.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {MainSidebarComponent} from './main-sidebar/main-sidebar.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {MainFooterComponent} from './main-footer/main-footer.component';
import {ControlSidebarComponent} from './control-sidebar/control-sidebar.component';
import {StockManagerComponent} from './stock/stock-manager/stock-manager.component';
import {StarsComponent} from './stars/stars.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StockformComponent} from './stock/stockform/stockform.component';
import {StockService} from './stock/stock.service';

const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'stock', component: StockManagerComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock/:id', component: StockformComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    StockManagerComponent,
    StarsComponent,
    DashboardComponent,
    StockformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
