import { Injectable } from "@nestjs/common";
import MySQLDatabase from "src/Database/MySQLDatabase";
import Category from "./Entity/Category";

@Injectable()
export default class CategoriesRepository {
    constructor(
        private readonly database: MySQLDatabase,
    ) {}

    async getCategories() {
        const query = 'SELECT * FROM category';
        return await this.database.select(query);
    }

    async createCategory(category: Category) {
        const query = 'INSERT INTO category (name, description, type, color) VALUES (?, ?, ?, ?)';
        const values = [category.getName(), category.getdescription(), category.getType(), category.getColor()];
        const result = await this.database.insert(query, values);

        if (result.affectedRows > 0) {
            return {
                id: result.insertId,
                name: category.getName(),
                description: category.getdescription(),
                type: category.getType(),
                color: category.getColor(),
            };
        }
        throw new Error('Failed to create category');
    }

    async deleteCategory(id: number) {
        const query = 'DELETE FROM category WHERE id = ?';
        const values = [id];
        const result = await this.database.delete(query, values);

        if (result.affectedRows > 0) {
            return {
                message: 'Category deleted successfully',
            };
        }
        throw new Error('Failed to delete category');
    }
}