import CategoryDTO from "../CategoryDTO";

export default class Category {
    name: string;
    description: string;
    type: string;
    color: string;

    constructor(name: string, description: string, type: string, color: string) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.color = color;
    }

    static fromDTO(dto: CategoryDTO): Category {
        return new Category(dto.name, dto.description, dto.type, dto.color);
    }

    getName(): string {
        return this.name;
    }

    getdescription(): string {
        return this.description;
    }

    getType(): string {
        return this.type;
    }

    getColor(): string {
        return this.color;
    }
}