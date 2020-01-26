import { CatsService } from './cats.service';
import { CreateCat } from './dto/create-cat.dto';
import { Controller, Body, Post, Get } from '@nestjs/common';



@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService){}

    @Post()
    async create(@Body() createCat: CreateCat) {
        return this.catsService.create(createCat);
    }

    @Get()
    list() {
        return this.catsService.list();
    }
}
