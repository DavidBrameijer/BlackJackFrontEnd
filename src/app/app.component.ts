import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlackjackComponent } from "./components/blackjack/blackjack.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlackjackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlackJackFrontEnd';
}
