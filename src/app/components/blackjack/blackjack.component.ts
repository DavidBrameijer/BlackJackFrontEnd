import { Component } from '@angular/core';
import { BlackjackService } from '../../services/blackjack.service';
import { HandModel } from '../../models/hand';

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [],
  templateUrl: './blackjack.component.html',
  styleUrl: './blackjack.component.css'
})
export class BlackjackComponent {

  currentGame:HandModel = {} as HandModel;
  constructor(private blackjackService:BlackjackService){}

  ngOnInit(){

  }

  newHand(){
    this.blackjackService.getNewHand().subscribe(response => {
      this.currentGame = response;
      this.blackjackService.currentHandId = this.currentGame.id;
    });
  }

  action(action:string){
    this.blackjackService.playAction(action).subscribe(response => this.currentGame = response);
  }
}
