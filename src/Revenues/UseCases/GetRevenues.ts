import { Dependencies, Injectable } from "@nestjs/common";
import RevenuesRepository from "../RevenuesRepository";

@Injectable()
@Dependencies(RevenuesRepository)
export default class GetRevenues {
    constructor(
        private readonly revenuesRepository: RevenuesRepository
    ) { }

    async execute() {
        const revenues = await this.revenuesRepository.getRevenues();
        const formattedRevenues = revenues.map(revenue => ({
            ...revenue,
            invoiceDueDate: this.formatDateToDDMMYYYY(revenue.invoiceDueDate)
        }));
        return formattedRevenues;
    }

    private formatDateToDDMMYYYY(dateInput: string | Date): string {
        let date: Date;
        if (typeof dateInput === 'string') {
            date = new Date(dateInput);
        } else {
            date = dateInput;
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    }
}