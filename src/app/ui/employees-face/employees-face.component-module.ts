import { NgModule } from '@angular/core';
import { EmployeesFaceComponent } from './employees-face.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
  declarations: [EmployeesFaceComponent],
  providers: [],
  exports: [EmployeesFaceComponent]
})
export class EmployeesFaceComponentModule {
}
