import {User} from '../models/user.model';
import {Subject} from 'rxjs';

export class UserService {

  private users: User[] = [
    {
      firstName: 'Cédric',
      lastName: 'Jacquet',
      email: 'cedjack@msn.com',
      drinkPreference: 'Coca-Cola',
      hobbies: [
        'coder',
        'manger du pain'
      ]
    }
  ];

  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
