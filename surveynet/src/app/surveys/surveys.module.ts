import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from "../shared/shared.module";
import { SurveyComponent } from './components/list/survey/survey.component';
import { SurveysService } from './services';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListComponent, SurveyComponent],
  providers: [SurveysService]
})
export class SurveysModule { }
