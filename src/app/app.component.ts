import { Component, OnInit, inject } from '@angular/core';
import { GameService } from './services/game.service';
import { Game } from './models/game';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  game?: Game;
  games: Game[] = [];
  private gameService = inject(GameService);

  // HOOK - para hidratacion del template ya cargado esqueleto html
  ngOnInit(): void{
    this.gameService.getGames()
      .subscribe(games => {
        this.games = games;
        console.log(games);
      })
  }

  onBuscarId(id: string){
    this.gameService.getGamebyId(+id).subscribe( game => {
      this.game = game;
    })
  }
}
