import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  export var ___people:  {
    id:   number,
    who:  string,
    wat:  string,
    cool: number,
    educ: string,
    man:  boolean,
    lang: string,
    del: boolean
  } [] = []

  export function JSONread() : object {
    if(___people.length === 0) {
      ___people.push(
        {
        id:   1,
        who:  'Kamil Peteraj',
        wat:  'Basnik textar',
        cool: 10,
        educ: 'Uplne stredne',
        man:  true,
        lang: 'SK',
        del: false
      },
      {
        id:   2,
        who:  'Marian Varga',
        wat:  'Hudobny skladatel',
        cool: 20,
        educ: 'Uplne stredne',
        man:  true,
        lang: 'SK',
        del: false
      },
      {
        id:   3,
        who:  'Fero Griglak',
        wat:  'Multi-instrumentalista',
        cool: 40,
        educ: 'Uplne stredne',
        man:  true,
        lang: 'SK EN',
        del: false
      },
      {
        id:   4,
        who:  'Marika Gobitova',
        wat:  'Spevacka',
        cool: 80,
        educ: 'Uplne stredne',
        man:  false,
        lang: 'SK CZ',
        del: false
      },
    
      )
  
    }
      
    return ___people;
  }
  