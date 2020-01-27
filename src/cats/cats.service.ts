import { Cat } from './interfaces/cats.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {

    public cats: Cat[] = [];

    create(cat: Cat) {
       return this.cats.push(cat);
    }

    list() {
        return this.cats.slice();
    }
}
