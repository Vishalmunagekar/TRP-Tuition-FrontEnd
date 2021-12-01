import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSessionStorageService {

  constructor(private sessionStorage : SessionStorageService) { }

  store(key: string, value: any): any{
      return this.sessionStorage.store(key, value);
  };

  retrieve(key: string): any {
      return this.sessionStorage.retrieve(key);
  };

  observe(key: string): Observable<any> {
      return this.sessionStorage.observe(key);
  };

  clear(key?: string): void {
    this.sessionStorage.clear(key);
  };
}
