export class CreateRevenueResponseDTO {
    public readonly invoiceDueDate: string;
    
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly description: string,
        public readonly value: number,
        invoiceDueDate: string,
        public readonly idCategory: number,
    ) {
        this.invoiceDueDate = CreateRevenueResponseDTO.formatDateToDDMMYYYY(invoiceDueDate);
    }

    private static formatDateToDDMMYYYY(dateInput: string | Date): string {
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