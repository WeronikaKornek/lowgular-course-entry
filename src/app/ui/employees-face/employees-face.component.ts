import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'app-employees-face',
  templateUrl: './employees-face.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFaceComponent {
  data$: Observable<PersonModel[]> = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) {
  }
}
