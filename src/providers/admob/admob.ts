
import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Platform } from 'ionic-angular';


@Injectable()
export class AdmobProvider {

  private adMobId: { banner: string, interstitial: string };


  constructor(private admobFree: AdMobFree , private platform : Platform) {
    this.platform.ready().then(() => {
      this.setAdMobIds();
    });
  }

  setAdMobIds() {

    if (this.platform.is('android')) {
      this.adMobId = {
        banner: 'ca-app-pub-9309829064818731/9313543504',
        interstitial: 'ca-app-pub-9309829064818731/5290538015'
      }
    }
    else if (this.platform.is('ios')) {
      this.adMobId = {
        banner: 'ca-app-pub-9309829064818731/9913089559',
        interstitial: 'ca-app-pub-9309829064818731/8216864503'
      }
    }
  }



  showBanner() {

    const bannerConfig: AdMobFreeBannerConfig = {

      id: this.adMobId.banner,
      isTesting: false,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        this.admobFree.banner.show();
      })
      .catch(e => console.log(e));
  }


}
