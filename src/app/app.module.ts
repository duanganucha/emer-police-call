import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CallNumber } from '@ionic-native/call-number';
import { NumberPhoneLists } from '../NumberPhoneLists';

import { AdMobFree } from '@ionic-native/admob-free';
import { AdmobProvider } from '../providers/admob/admob';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    NumberPhoneLists,
    AdMobFree,
    AdmobProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdmobProvider
  ]
})
export class AppModule {}
