import { Component, Input, Output, EventEmitter, output } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
import { User } from './user.model';
import { CardComponent } from "../tasks/shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Output() select = new EventEmitter();
  // select = output<string>();

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

// export class UserComponent {

//   // selectedUser = DUMMY_USERS[randomIndex]; zonejs
//   // selectedUser = signal(DUMMY_USERS[randomIndex]); signal

//   onSelectUser(){
//     // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     // this.selectedUser = DUMMY_USERS[randomIndex]; zonejs
//     // this.selectedUser.set(DUMMY_USERS[randomIndex]); signal
//   }

//   // get imagePath() {
//   //   return 'assets/users/' + this.selectedUser.avatar; zonejs
//   // }

//   // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar) signal
// }
