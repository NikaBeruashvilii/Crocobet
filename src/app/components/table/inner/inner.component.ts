import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss']
})
export class InnerComponent implements OnInit {

  currentUser: User = new User();

  constructor(private _api: ApiService, private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId() {
    this.acRoute.params.subscribe(par => {
      this.getDataById(par['id'])
    })
  }

  getDataById(id: number) {
    this._api.getDataById(id).subscribe((res: User) => {
      this.currentUser = res
    })
  }

}
