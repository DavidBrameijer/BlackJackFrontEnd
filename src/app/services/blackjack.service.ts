import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HandModel } from '../models/hand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlackjackService {

  currentHandId:number | null = null;
  baseUrl:string = "https://localhost:7292/blackjack"

  constructor(private http:HttpClient) { }

  getCurrentHand():Observable<HandModel>{
    return this.http.get<HandModel>(`${this.baseUrl}?gameId=${this.currentHandId}`);
  }

  getNewHand():Observable<HandModel>{
    return this.http.post<HandModel>(`${this.baseUrl}`, {});
  }

  playAction(action:string):Observable<HandModel>{
    return this.http.post<HandModel>(`${this.baseUrl}/play?action=${action}&gameId=${this.currentHandId}`, {});
  }

  getAllHands(){
    return this.http.get<HandModel[]>(`${this.baseUrl}/allHands?gameId=${this.currentHandId}`);
  }
}
