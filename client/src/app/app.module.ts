import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './core/auth.service';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {FirebaseAuthService} from './common/firebase-auth.service';
import {SystemModule} from './system/system.module';
import {AuthGuard} from './core/auth.guard';
import {UsersService} from './core/users.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './common/classes/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    SystemModule,
    MatToolbarModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase, 'ng-6-test'),
    AngularFireDatabaseModule,
    MatCardModule
  ],
  providers: [
    AngularFireAuth,
    FirebaseAuthService,
    AuthService,
    AuthGuard,
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
