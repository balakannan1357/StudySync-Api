import { BaseRoute } from '@/routes/base.route';
import { Router } from 'express';
import { ReportController } from '../controllers/report.controller';
import { CreateReportDto } from '../dtos/report.dto';
import { IReport } from '../interfaces/report.interface';

export class ReportRoute extends BaseRoute<IReport> {
  public path = '/Reports';
  public router = Router();
  public controller = new ReportController();

  constructor() {
    super();
    this.initializeBaseRoutes(this.router, this.path, this.controller, CreateReportDto);
  }
}
