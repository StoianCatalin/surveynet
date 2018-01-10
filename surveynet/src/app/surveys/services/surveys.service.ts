import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { SurveyModel } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export class SurveysService {

  private surveyEndpoit: string = 'api/surveys';

  constructor(private http: HttpClient) { }

  public getSurveys(): Observable<Array<SurveyModel>> {
    return this.http.get(this.surveyEndpoit).map((apiObj: Array<SurveyModel>) => {
        return apiObj.map((x: SurveyModel) => Object.assign(new SurveyModel(), x));
      });
  }
}
