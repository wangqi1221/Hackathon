import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformServer } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of } from "rxjs";
import { UserProfile } from "@/model/model";

@Injectable({
    providedIn: 'root',
})
export class PlatformService {
    baseApi: string = 'http://localhost:80'
    constructor(@Inject(PLATFORM_ID) private platformId: object, private http: HttpClient) {}

    getClientProfile(id: string): Observable<UserProfile> {
        const res = {}
        return this.http.get(`${this.baseApi}/${id}`)
            .pipe(
                map((data) => data || res),
                catchError(() => of(res))
            )
    }

    isPlatformServer(): boolean {
        return isPlatformServer(this.platformId)
    }

    isPlatformClient(): boolean {
        return !this.isPlatformServer()
    }
}