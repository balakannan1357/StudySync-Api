import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { StudentRoute } from './report-generator/routes/student.route';
import { StudentAnswerRoute } from './report-generator/routes/studentAnswer.route';
import { TestRoute } from './report-generator/routes/test.route';
import { SubTopicRoute } from './routes/subTopic.route';
import { WeekPlanRoute } from './routes/weekPlan.route';

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

const app = new App(Routes);

app.listen();
