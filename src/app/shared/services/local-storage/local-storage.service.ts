import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addToStoredMap<T>(storageKey: string, mapKey: string, value: T): void {
    let storedMap: { [key: string]: T } = JSON.parse(localStorage.getItem(storageKey));

    if (!storedMap) {
      storedMap = {};
    }

    storedMap[mapKey] = value;
    localStorage.setItem(storageKey, JSON.stringify(storedMap));
  }

  retrieveFromStoredMap<T>(storageKey: string, mapKey: string): T {
    const storedArray: { [key: string]: T } = JSON.parse(localStorage.getItem(storageKey));

    return storedArray[mapKey];
  }

  retrieveStoredMap<T>(storageKey: string): { [key: string]: T } {
    return JSON.parse(localStorage.getItem(storageKey)) as { [key: string]: T };
  }

  updateValueFromStoredMap<T>(storageKey: string, mapKey: string, value: T): void {
    const storedMap: { [key: string]: T } = JSON.parse(localStorage.getItem(storageKey));

    storedMap[mapKey] = value;
    localStorage.setItem(storageKey, JSON.stringify(storedMap));
  }
}
