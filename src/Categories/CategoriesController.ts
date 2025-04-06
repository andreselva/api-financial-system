import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import CategoriesService from "./CategoriesService";
import CategoryDTO from "./CategoryDTO";

@Controller('categories')
export default class CategoriesController {
    constructor(
        private readonly categoriesService: CategoriesService,
    ) {

    }

    @Get()
    async getCategories() {
        return await this.categoriesService.getCategories();
    }

    @Post()
    async createCategory(@Body() category: CategoryDTO) {
        return await this.categoriesService.createCategory(category);
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: string) {
        return await this.categoriesService.deleteCategory(id);
    }
}