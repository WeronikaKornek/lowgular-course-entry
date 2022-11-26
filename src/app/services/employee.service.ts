import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonModel } from '../model/person.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>(
      'https://dummy.restapiexample.com/api/v1/employees',
    ).pipe(
      map((getXHRResponse: ApiResponse<EmployeeResponse[]>) => {
        return getXHRResponse.data.map((employeeRespons: EmployeeResponse) => {
          return {
            name: employeeRespons.employee_name,
            personalNumber: employeeRespons.id,
            img: employeeRespons.profile_img,
            surname: '',
            mail: ''
          }
        });
      })

    )


  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map(_ => void 0));
  }

  getOne(id: string): Observable<PersonModel> {
     return this._httpClient.get<ApiResponse<EmployeeResponse>>('https://dummy.restapiexample.com/api/v1/employee/'+id).pipe(
    map((response:ApiResponse<EmployeeResponse>): PersonModel=>({
      personalNumber: response.data.id,
      img:response.data.profile_img,
      mail: response.data.id,
      name: response.data.employee_name,
    }))
  );
  }
}



