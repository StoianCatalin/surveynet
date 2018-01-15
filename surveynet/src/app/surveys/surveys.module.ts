import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from "../shared/shared.module";
import { SurveyComponent } from './components/list/survey/survey.component';
import { SurveysService } from './services';
import {routing} from "./routes/routing";
import {AddsurveyComponent} from "./components/addsurvey/addsurvey.component";
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ListComponent,
    SurveyComponent,
    AddsurveyComponent
  ],
  providers: [SurveysService]
})
export class SurveysModule { }
