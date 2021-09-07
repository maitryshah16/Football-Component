import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
@Component({
  selector: 'app-football-matches',
  templateUrl: './football-matches.component.html',
  styleUrls: ['./football-matches.component.scss']
})
export class FootballMatchesComponent implements OnInit {
  years: number[] = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
  selectedYear: number;

  private REST_API_SERVER = "https://jsonmock.hackerrank.com/api/football_competitions?year=";

  constructor(private http: HttpClient) {
  }

  products = {} as ApiResponse;

  public getYear(year) {
    this.http.get<ApiResponse>(this.REST_API_SERVER+year).subscribe(results => this.products = results);
  }

  ngOnInit(): void {

  }

}
export interface Match {
  name: string;
  winner: string;
}

interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}
interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}