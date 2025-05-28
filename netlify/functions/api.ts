import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { ReportRoute } from '../../src/report-generator/routes/report.route';
import { StudentRoute } from '../../src/report-generator/routes/student.route';
import { StudentAnswerRoute } from '../../src/report-generator/routes/studentAnswer.route';
import { TestRoute } from '../../src/report-generator/routes/test.route';
import { SubTopicRoute } from '../../src/routes/subTopic.route';
import { WeekPlanRoute } from '../../src/routes/weekPlan.route';

import serverless from 'serverless-http';

ValidateEnv();

const Routes = [];

Routes.push(new IndexRoute());
Routes.push(new AuthRoute());
Routes.push(new UserRoute());
Routes.push(new SubTopicRoute());
Routes.push(new WeekPlanRoute());
Routes.push(new TestRoute());
Routes.push(new StudentAnswerRoute());
Routes.push(new StudentRoute());
Routes.push(new ReportRoute());

const app = new App(Routes);

export const handler = serverless(app.getServer());
