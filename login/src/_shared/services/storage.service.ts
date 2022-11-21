import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable()
export class StorageService {
  private storageSub = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: any): void {
    sessionStorage.setItem(key, data);
    this.storageSub.next('changed');
  }

  getItem(key: string): any {
    return sessionStorage.getItem(key);
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
    this.storageSub.next('changed');
  }

  removeAll(): void {
    sessionStorage.clear();
    this.storageSub.next('changed');
  }
}
