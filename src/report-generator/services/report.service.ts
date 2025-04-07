import { BaseService } from '@/services/base.service';
import { Service } from 'typedi';
import { IReport } from '../interfaces/report.interface';
import { ReportModel } from '../models/report.model';

@Service()
export class ReportService extends BaseService<IReport> {
  constructor() {
    super(ReportModel);
  }
}
