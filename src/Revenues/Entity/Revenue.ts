import { RevenueDTO } from "../DTOs/RevenueDTO";

export default class Revenue {
    name: string;
    description: string;
    value: number;
    invoiceDueDate: string;
    idCategory: number
    id?: number;

    constructor(name: string, description: string, value: number, invoiceDueDate: string, idCategory: number, id?: number) {
        this.name = name;
        this.description = description;
        this.value = value;
        this.invoiceDueDate = invoiceDueDate;
        this.idCategory = idCategory;
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getValue(): number {
        return this.value;
    }

    getInvoiceDueDate(): string {
        return this.invoiceDueDate;
    }

    getIdCategory(): number {
        return this.idCategory;
    }

    static fromDTO(dto: RevenueDTO): Revenue {
        return new Revenue(
            dto.name,
            dto.description,
            Number(dto.value),
            Revenue.formatDate(dto.invoiceDueDate),
            Number(dto.idCategory)
        );
    }

    private static formatDate(dateInput: Date | string): string {
        const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
}