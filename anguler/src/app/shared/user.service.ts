import { User } from './user.model';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User ={
    fullName: '',
    email: '',
    password: ''
  };

  constructor() { }
}
