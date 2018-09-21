import { LoginComponent } from "./pages/login/login.component";
import { SplashComponent } from "./pages/splash/splash.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { FirstChoiceComponent } from "./pages/first_choice/first_choice.component";
import { HomeComponent } from './pages/home/home.component';

export const routes = [
  { path: "", component: SplashComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "first_choice", component: FirstChoiceComponent },
  { path: "home", component: HomeComponent },
];

export const navigatableComponents = [
  SplashComponent,
  LoginComponent,
  SignupComponent,
  FirstChoiceComponent,
  HomeComponent,
];