import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MessageModel } from './message-model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  sendMessage(message: MessageModel): Observable<any> {
    return this.http.post(this.serverUrl + "contactme", message);
  }

}
