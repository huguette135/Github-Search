import { Component, OnInit } from '@angular/core';

import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repository';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
    providers: [SearchRequestService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {


  repos:Repository;
  reponame:string;
  show:number;

