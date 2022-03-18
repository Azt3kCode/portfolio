import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const bg: any = document.getElementById('bg');

window.addEventListener('scroll', () => {
  bg.style.top = -(window.pageYOffset / 5) + 'px';
});
