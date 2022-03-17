import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
 
const element: any = document.getElementById('principal_bg');

element.addEventListener('mousemove', (e: any) => {
  const x = e.clientX / 50;
  const y = e.clientY / 50;
  element.style.transform = `translate(${x}px, ${y}px)`;
});