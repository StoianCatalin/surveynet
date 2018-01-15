import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../../shared/services/authentication/authentication.service";
import { SurveyModel } from '../../models';
import { SurveysService } from '../../services';
import { Surveys } from './surveys.mock';
import {Router} from "@angular/router";

@Component({
  selector: 'sn-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public surveys: Array<SurveyModel>;

  constructor(
    private auth: AuthenticationService,
    private surveysService: SurveysService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.surveysService.getSurveys().subscribe((surveys: Array<SurveyModel>) => this.surveys = surveys);
    this.surveys = Surveys;
  }

  goTo(route: string): void {
    this.router.navigate([route]);
  }

}
