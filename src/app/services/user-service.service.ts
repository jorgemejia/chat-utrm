import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public JWToken = 'TK1983!';

  constructor() { }

  // Obtiene el token guardado en sessionStorage, si no existe devuelve null
  getToken() {
    const token = localStorage.getItem(this.JWToken);
    if (token != 'undefined') {
      return token;
    } else {
      return null;
    }
  }

  logout() {
    localStorage.removeItem(this.JWToken);
  }
}
