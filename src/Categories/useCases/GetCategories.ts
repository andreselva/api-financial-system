import { Injectable } from "@nestjs/common";
import CategoriesRepository from "../CategoriesRepository";

@Injectable()
export default class GetCategories {
    constructor(
        private readonly categoriesRepository: CategoriesRepository,
    ) {}

    async get() {
        return await this.categoriesRepository.getCategories();
    }
}