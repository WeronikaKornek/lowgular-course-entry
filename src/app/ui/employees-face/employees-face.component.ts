import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employees-face',
  templateUrl: './employees-face.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFaceComponent {
  data$: Observable<EmployeeModel[] > = this._httpClient.get<EmployeeModel[]>('assets/data/employees.json');
  constructor(private _httpClient: HttpClient) {
  }
}

