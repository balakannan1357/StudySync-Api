import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { SubTopicRoute } from './routes/subTopic.route';
import { WeekPlanRoute } from './routes/weekPlan.route';

ValidateEnv();

const Routes = [];

Routes.push(new IndexRoute());
Routes.push(new AuthRoute());
Routes.push(new UserRoute());
Routes.push(new SubTopicRoute());
Routes.push(new WeekPlanRoute());

const app = new App(Routes);

app.listen();
