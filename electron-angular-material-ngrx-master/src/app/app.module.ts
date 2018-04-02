import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgxElectronModule} from 'ngx-electron';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {helloReducer} from './reducers/hello.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {postReducer} from './reducers/post.reducer';
import {PostEffects} from './effects/post.effects';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    EffectsModule.forRoot([PostEffects]),
    StoreModule.forRoot({
      message: helloReducer,
      post: postReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
