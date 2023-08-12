import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api.service';
import { User } from './user.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'body', 'details'];
  userData: User[] = [];
  dataSource = new MatTableDataSource<User>(this.userData);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.loadData()

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this._api.getData().subscribe((res: User[]) => {
      this.userData = res
      this.dataSource.data = this.userData;
    })
  }
}
