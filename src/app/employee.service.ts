import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Employee } from "./employee";

//Bu şekil inject etmezsek app.module.ts içinde provider a bu servisi eklememiz gerekir.
@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    private apiServerUrl =environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getEmployee():Observable<Employee[]>{
        return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
    }

    public addEmployee(employee: Employee):Observable<Employee>{
        return this.http.post<any>(`${this.apiServerUrl}/employee/add`,employee);
    }

    public updateEmployee(employee: Employee):Observable<Employee>{
        return this.http.put<any>(`${this.apiServerUrl}/employee/update`,employee);
    }

    public deleteEmployee(employeeId: number | null):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }
}