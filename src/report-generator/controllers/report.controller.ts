import { BaseController } from '@/controllers/base.controller';
import Container from 'typedi';
import { IReport } from '../interfaces/report.interface';
import { ReportService } from '../services/report.service';

export class ReportController extends BaseController<IReport> {
  private readonly _service = Container.get(ReportService);
  constructor() {
    super();
    this.setService(this._service);
  }
}
