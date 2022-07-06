import { Injectable } from '@angular/core';
import { of, delay, tap, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  get userName(): string | null {
    return localStorage.getItem('username');
  }

  constructor() { }

  login(username: string, password: string): Promise<boolean> {
    const login$ = of(true).pipe(
      delay(1000),
      tap(() => localStorage.setItem('username', username))
    )
    return lastValueFrom(login$);
  }
}
