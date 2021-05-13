import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionManagerService {
  
    public PSI_Gen_FilterData: string = 'PSI.Gen.FilterData';

    public setItem(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    public getItem(key: string): any {
        let sessionItem: any = JSON.parse(sessionStorage.getItem(key));
        if (sessionItem)
            return sessionItem;
        else
            return null;
    }

    public removeItem(key: string): void {
        sessionStorage.removeItem(key);
    }

    public destroySession(): void {
        sessionStorage.clear();
    }
}