import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './start/start.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { Game1Component } from './game/game1/game1/game1.component';
import { Game2Component } from './game/game2/game2/game2.component';
import { Game3Component } from './game/game3/game3/game3.component';
import { Game4Component } from './game/game4/game4/game4.component';
import { Game5Component } from './game/game5/game5/game5.component';
import { Game6Component } from './game/game6/game6/game6.component';
import { Game7Component } from './game/game7/game7/game7.component';
import { Game8Component } from './game/game8/game8/game8.component';
import { Game1AdminComponent } from './game/game1/game1-admin/game1-admin.component';
import { Game2AdminComponent } from './game/game2/game2-admin/game2-admin.component';
import { Game3AdminComponent } from './game/game3/game3-admin/game3-admin.component';
import { Game4AdminComponent } from './game/game4/game4-admin/game4-admin.component';
import { Game5AdminComponent } from './game/game5/game5-admin/game5-admin.component';
import { Game6AdminComponent } from './game/game6/game6-admin/game6-admin.component';
import { Game7AdminComponent } from './game/game7/game7-admin/game7-admin.component';
import { Game8AdminComponent } from './game/game8/game8-admin/game8-admin.component';
import { BlankComponent } from './game/blank/blank/blank.component';
import { ScoreComponent } from './game/score/score.component';
import { IntroComponent } from './game/intro/intro.component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatInputModule } from '@angular/material/input';
import { GameIntroComponent } from './game/game-intro/game-intro.component';
import { ForFilterPipe } from './pipe/for-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    OverviewComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    Game4Component,
    Game5Component,
    Game6Component,
    Game7Component,
    Game8Component,
    Game1AdminComponent,
    Game2AdminComponent,
    Game3AdminComponent,
    Game4AdminComponent,
    Game5AdminComponent,
    Game6AdminComponent,
    Game7AdminComponent,
    Game8AdminComponent,
    BlankComponent,
    ScoreComponent,
    IntroComponent,
    GameIntroComponent,
    ForFilterPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: StartComponent, pathMatch: 'full' },
      { path: ':sessionType/game/score', component: ScoreComponent },
      { path: ':sessionType/admin', component: OverviewComponent },
      { path: ':sessionType/game/intro', component: IntroComponent },
      { path: ':sessionType/game/blank', component: BlankComponent },
      { path: ':sessionType/game/game1', component: Game1Component },
      { path: ':sessionType/game/game2', component: Game2Component },
      { path: ':sessionType/game/game3', component: Game3Component },
      { path: ':sessionType/game/game4', component: Game4Component },
      { path: ':sessionType/game/game5', component: Game5Component },
      { path: ':sessionType/game/game6', component: Game6Component },
      { path: ':sessionType/game/game7', component: Game7Component },
      { path: ':sessionType/game/game8', component: Game8Component }
    ]),
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
