import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  private _todos$: any;
  private _db: any;
  private _todosRef: any;

  constructor() {
    // Get a firebase reference to the root
    this._db = firebase.database().ref('/');
    // Get a firebase reference to the todos
    this._todosRef = firebase.database().ref('todos');
    this._todosRef.on('child_added', this.handleData, this);
    this._todos$ = new ReplaySubject();
  }

  get todos() {
    return this._todos$;
  }

  handleData(snap) {
    try {
      // Tell our observer we have new database
      this._todos$.next(snap.val());
    } catch (error) {
      console.log('catching', error);
    }

  }

}
