import { Dependencies, Injectable } from "@nestjs/common";
import CreateRevenue from "./UseCases/CreateRevenue";
import GetRevenues from "./UseCases/GetRevenues";
import { RevenueDTO } from "./DTOs/RevenueDTO";

@Injectable()
@Dependencies(
    GetRevenues,
    CreateRevenue
)
export default class RevenuesService {
    constructor(
        private readonly getRevenuesUseCase: GetRevenues,
        private readonly createRevenueUseCase: CreateRevenue
    ) { }

    async getRevenues() {
        return await this.getRevenuesUseCase.execute();
    }

    async createRevenue(revenue: RevenueDTO) {
        return await this.createRevenueUseCase.execute(revenue)
    }
}