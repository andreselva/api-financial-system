import CategoryDTO from "../CategoryDTO";

export default class Validator {
    static validate(category: CategoryDTO): boolean {
        if (typeof category.name !== 'string' || category.name.length === 0) {
            throw new Error('Invalid name format');
        }
        if (typeof category.type !== 'string' || category.type.length === 0) {
            throw new Error('Invalid type format');
        }
        if (typeof category.color !== 'string' || category.color.length === 0) {
            throw new Error('Invalid color format');
        }
        return true;
    }

    static validateId(id: string) {
        if (Number(id) <= 0) {
            throw new Error('Invalid ID!');
        }
    }
}