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


  constructor(private searchRequestService: SearchRequestService) { 
    this.repos = new Repository ("","",new Date());
    this.searchRequestService.getRepoInfo().subscribe(repos => {
      console.log(repos);
      
    });

     
  }


  searchRepo(){
    this.searchRequestService.updateRepos(this.reponame);
    this.searchRequestService.getRepoInfo().subscribe(repos => {
     console.log(repos);
     
   });
   
  }

  loadMore(){
    // this.dataService.updateRepos(this.reponame);
    this.searchRequestService.updateShow(this.show);
    this.searchRequestService.getRepoInfo().subscribe(repos => {
     console.log(repos);
   });
   
  }


  ngOnInit() {
  }

}
