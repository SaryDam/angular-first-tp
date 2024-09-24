import { Component } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { QuizService } from '../shared/services/quiz.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private quizService: QuizService) { }

  logout() {
    this.authService.logout();
  }

  get isUserConnected() {
    return this.authService.isUserConnected();
  }

  get getUsername() {
    return this.authService.user?.username || '';
  }

  resetHeader(){
    console.log("Daminenenen")
    this.quizService.resetQuiz
  }
}
