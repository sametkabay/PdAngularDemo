import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { login } from '../Models/login.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/*
describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService,loginModel:login) => {
    const LoginObj = {
      tenancyName: 'sk',
      userNameOrEmailAddress: 'admin',
      password: 'samet12'
    }
    expect(service.login(LoginObj)).toContain(loginModel);
  }));
});
*/

var http: HttpClient;
var router: Router;

describe('AuthService', () => {
  it('Gelen sayıyı bir arttırması gerekiyor', () => {
    let comp = new AuthService(this.http,this.router);
    const result = comp.numberUp(2);
    expect(result).toBe(3);
  })
});