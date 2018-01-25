import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroesAsync().then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroesAsync(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout( () => resolve(this.getHeroes()), 2000);
    });
  }

}
