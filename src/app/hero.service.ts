import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    private heroesUrl = 'api/heroes';  // URL to web api

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
        this.log('fetched heroes');
        return this.http.get<Hero[]>(this.heroesUrl);
      }

    getHero(id: number): Observable<Hero> {
        this.log(`fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string): void {
        this.messageService.add(`HeroService: ${message}`);
    }
}
