import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { User } from '../models'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<User[]> {
    // Mock User Data
    return of([
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Doe',
      },
    ])
  }
}
