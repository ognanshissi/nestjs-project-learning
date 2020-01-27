import { CatsService } from './cats.service';
import { CreateCat } from './dto/create-cat.dto';
import { Controller, Body, Post, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) { }

    @Post()
    async create(@Body() createCat: CreateCat) {
        return this.catsService.create(createCat);
    }

    @Get()
    list() {
        return this.catsService.list();
    }

    fibonacci(n: number, memoize = []) {
        if (memoize[n] !== null) {
            return memoize[n];
        }
        let result;
        if (n <= 2) {
            result =  1;
        } else {
            result =  this.fibonacci(n - 1, memoize) + this.fibonacci(n - 2, memoize);
        }
        memoize[n] = result;
        return result;
    }
}
