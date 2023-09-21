import { UserProfile } from "@/model/model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";

@Injectable()
export class ServiceModel {
    baseApi: string = 'http://localhost:80'

    constructor(private http: HttpClient) {

    }

    getClientProfile(id: string): Observable<UserProfile> {
        const res = {}
        return this.http.get(`${this.baseApi}/${id}`)
            .pipe(
                map((data) => data || res),
                catchError(() => of(res))
            )
    }

}