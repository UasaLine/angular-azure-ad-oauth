import {Component, OnInit} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Oauth-app-test';

  constructor(private oauthService: OAuthService) {

  }

  private async configAuth(): Promise<void> {
    this.oauthService.issuer = 'https://login.microsoftonline.com/common/oauth2/authorize';
    this.oauthService.loginUrl = 'https://login.microsoftonline.com/common/oauth2/authorize';
    this.oauthService.clientId = 'c8544830-cc26-4ba5-8f2b-ce4fed11e7e2';
    this.oauthService.resource = 'api://1f8204a9-1cf9-4007-9f25-8abe9ff4d902';
    this.oauthService.logoutUrl = 'https://www.npmjs.com/package/angular-oauth2-oidc';
    this.oauthService.redirectUri = 'http://localhost:4200/';
    this.oauthService.scope = 'email';
    this.oauthService.oidc = false;
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.responseType = 'code';
  }

  async ngOnInit() {
    this.configAuth();
    await this.oauthService.initImplicitFlow();
    await this.oauthService.tryLogin({});
    alert(this.oauthService.getIdentityClaims());

    alert(this.oauthService.getAccessToken());
  }

}
