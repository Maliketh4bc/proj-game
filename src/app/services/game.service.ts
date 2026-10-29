import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/games';

  constructor () {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  getGamebyId(id: number): Observable<Game> {
    return this.http.get<Game>(`${ this.apiUrl}/${id}`);
  }
}


// Comando para levantar json: npx json-server --watch db.json --port 3000