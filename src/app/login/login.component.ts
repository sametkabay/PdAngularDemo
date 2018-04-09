import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { login } from '../Models/login.model';
import { Router } from '@angular/router';

declare var $: any;


@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  test: Date = new Date();
  loginModel: login;
  
  checkFullPageBackgroundImage() {
    var $page = $('.full-page');
    var image_src = $page.data('image');

    if (image_src !== undefined) {
      var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
      $page.append(image_container);
    }
  };
  ngOnInit() {
    this.checkFullPageBackgroundImage();

    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 700)
  }

  constructor(private authService: AuthService, private router:Router ) { }

  login(tenantname: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement) {
    
    const LoginObj = {
      tenancyName: tenantname.value,
      userNameOrEmailAddress: username.value,
      password: password.value
    }
    
    this.authService.login(LoginObj)
      .subscribe((resp: any) => {
        this.loginModel =resp,

        localStorage.setItem('accessToken',this.loginModel.result.accessToken),
        localStorage.setItem('encryptedAccessToken',this.loginModel.result.encryptedAccessToken),
        this.router.navigate(['dashboard']);
      });
      
  }


}
