/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Index
      </a>
      <a [routerLink]=" ['./home'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
      </a>
      <a [routerLink]=" ['./about'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        About
      </a>
      <a [routerLink]=" ['./users/login'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Login
      </a>
      <a [routerLink]=" ['./users/register'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Register
      </a>
      <a [routerLink]=" ['./users/profile'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Profile
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>GOPRO by <a [href]="url">mQuBits</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'http://www.mqubits.com/assets/images/logo.png';
  public name = 'mQuBits';
  public url = 'http://mQuBits.com';

  constructor(
    public appState: AppState
  ) { }

  public ngOnInit() {

  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
