import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app.module";


// Compile using french translations
platformBrowserDynamic().bootstrapModule(
  AppModule);
