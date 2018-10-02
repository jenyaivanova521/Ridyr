import { HomeComponent } from './pages/home/home.component';
import { SplashComponent } from '~/pages/getstarted/splash/splash.component';
import { LoginComponent } from '~/pages/getstarted/login/login.component';
import { SignupComponent } from '~/pages/getstarted/signup/signup.component';
import { FirstChoiceComponent } from '~/pages/getstarted/first_choice/first_choice.component';
import { TabsComponent } from '~/pages/main/tabs/tabs.component';

export const routes = [
  { path: "", component: SplashComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "first_choice", component: FirstChoiceComponent },
  { path: "home", component: HomeComponent },
  { path: "main_tabs", component: TabsComponent },
];

export const navigatableComponents = [
  SplashComponent,
  LoginComponent,
  SignupComponent,
  FirstChoiceComponent,
  HomeComponent,
  TabsComponent,
];