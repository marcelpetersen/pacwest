import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';

// Custom Pages for this App
import { HomePage } from './home/home';
import { FuturePage } from './future/future';
import { FloorPlansPage } from './floor-plans/floor-plans';
import { LocationPage } from './location/location';
import { GalleryPage } from './gallery/gallery';
import { VitalsPage } from './vitals/vitals';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = HomePage;
export const Tab2Root = FuturePage;
export const Tab3Root = FloorPlansPage;
export const Tab4Root = LocationPage;
export const Tab5Root = VitalsPage;
export const Tab6Root = GalleryPage;
