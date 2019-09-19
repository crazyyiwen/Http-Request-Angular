import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Colors from '../../assets/JsonFile.json';

@Injectable({
    providedIn: 'root'
})

export class DisplayService{
    apiUrl: string = 'https://localhost:44302/api/values';
    constructor(private http: HttpClient){
    }
    getCourses(): Observable<any[]>{
        console.log(Colors.colors);
        return this.http.get<any[]>(this.apiUrl);
    }
    postCourse(course: any): Observable<any>{
        return this.http.post<any>(this.apiUrl, course);
    }
    deleteCourse(id: number): Observable<any>{
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
    putCourse(id: number, course: any){
        return this.http.put<any>(`${this.apiUrl}/${id}`, course);
    }
}