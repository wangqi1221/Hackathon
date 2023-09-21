import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformServer } from "@angular/common";

@Injectable({
    providedIn: 'root',
})
export class PlatformService {
    constructor(@Inject(PLATFORM_ID) private platformId: object) {}

    isPlatformServer(): boolean {
        return isPlatformServer(this.platformId)
    }

    isPlatformClient(): boolean {
        return !this.isPlatformServer()
    }
}