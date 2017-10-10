import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

// Custom Pages for Pacwest
import { HomePage } from '../pages/home/home';
import { FuturePage } from '../pages/future/future';
import { FloorPlansPage } from '../pages/floor-plans/floor-plans';
import { LocationPage } from '../pages/location/location';
import { VitalsPage } from '../pages/vitals/vitals';
import { GalleryPage } from '../pages/gallery/gallery';

// Modals for Floor Plans Page
import { ModalSuites2700 } from '../pages/modalsuites2700/modalsuites2700';
import { ModalSuites2600 } from '../pages/modalsuites2600/modalsuites2600';
import { ModalSuites2250 } from '../pages/modalsuites2250/modalsuites2250';
import { ModalSuites2230 } from '../pages/modalsuites2230/modalsuites2230';
import { ModalSuites2220 } from '../pages/modalsuites2220/modalsuites2220';
import { ModalSuites2050 } from '../pages/modalsuites2050/modalsuites2050';
import { ModalSuites1450 } from '../pages/modalsuites1450/modalsuites1450';
import { ModalSuites1440 } from '../pages/modalsuites1440/modalsuites1440';
import { ModalSuites1220 } from '../pages/modalsuites1220/modalsuites1220';
import { ModalSuites790 } from '../pages/modalsuites790/modalsuites790';
import { ModalSuites740 } from '../pages/modalsuites740/modalsuites740';
import { ModalSuites730 } from '../pages/modalsuites730/modalsuites730';
import { ModalSuites400 } from '../pages/modalsuites400/modalsuites400';
import { ModalSuites300 } from '../pages/modalsuites300/modalsuites300';

// Providers
import { User } from '../providers/user';
import { Api } from '../providers/api';
import { Settings } from '../providers/settings';
import { Items } from '../mocks/providers/items';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'null',
    option3: 'null',
    option4: 'null'
  });
}


/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages = [
  MyApp,
  TabsPage,
  TutorialPage,
  // MenuPage,

  HomePage,
  FuturePage,
  FloorPlansPage,
  LocationPage,
  VitalsPage,
  GalleryPage,

  ModalSuites2700,
  ModalSuites2600,
  ModalSuites2250,
  ModalSuites2230,
  ModalSuites2220,
  ModalSuites2050,
  ModalSuites1450,
  ModalSuites1440,
  ModalSuites1220,
  ModalSuites790,
  ModalSuites740,
  ModalSuites730,
  ModalSuites400,
  ModalSuites300
];

export function declarations() {
  return pages;
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    User,
    Api,
    Items,

    { provide: Settings, useFactory: provideSettings, deps: [ Storage ] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule {}
