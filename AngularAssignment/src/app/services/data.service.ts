import { Injectable } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Util } from './../models/util';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryWebApiModule {

  constructor(private util: Util) {

  }
  createDb() {
    return  {
      users : this.util.generateUsers(1)
    }
  }
}
