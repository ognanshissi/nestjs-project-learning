import { PipeTransform, ArgumentMetadata, Injectable, BadRequestException } from "@nestjs/common";


@Injectable()
export class JoiValidationPipe implements PipeTransform {

    constructor(private readonly schema) {}
    transform(value: any, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(value);
        if (error) { throw new BadRequestException('Validation failed!') }
        return value;
    }

}