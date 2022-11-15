import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import {EmployeesFaceComponentModule} from "./ui/employees-face/employees-face.component-module";
import {EmployeeService} from "./services/employee.service";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {ProjectServiceModule} from "./services/project.service-module";
import {ProjectlistComponentModule} from "./ui/projectlist/projectlist.component-module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeeServiceModule,
    EmployeesFaceComponentModule,
    ProjectlistComponentModule,
    ProjectServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
