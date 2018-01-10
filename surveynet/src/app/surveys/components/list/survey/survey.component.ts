import { Component, Input, OnInit } from '@angular/core';
import { SurveyModel } from '../../../models';

@Component({
  selector: 'sn-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  @Input() public survey: SurveyModel;

  constructor() { }

  ngOnInit() {
  }

}
