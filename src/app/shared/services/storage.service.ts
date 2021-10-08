import { Injectable } from '@angular/core';

/** storage service */

@Injectable()
export class StorageService {
  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  check(key: string): any {
    return !!localStorage.getItem(key);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
