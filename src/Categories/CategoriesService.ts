import { Dependencies, Injectable } from "@nestjs/common";
import GetCategoriesUseCase from "./useCases/GetCategories";
import CreateCategory from "./useCases/CreateCategory";
import CategoryDTO from "./CategoryDTO";
import DeleteCategory from "./useCases/DeleteCategory";

@Injectable()
@Dependencies(
    GetCategoriesUseCase,
    CreateCategory,
    DeleteCategory
)
export default class CategoriesService {
    constructor(
        private readonly getCategoriesUseCase: GetCategoriesUseCase,
        private readonly createCategoryUseCase: CreateCategory,
        private readonly deleteCategoryUseCase: DeleteCategory
    ) {}

    async getCategories() {
        return await this.getCategoriesUseCase.get();
    }

    async createCategory(category: CategoryDTO) {
        return await this.createCategoryUseCase.create(category);
    }

    async deleteCategory(id: string) {
        return await this.deleteCategoryUseCase.delete(Number(id));
    }
}
