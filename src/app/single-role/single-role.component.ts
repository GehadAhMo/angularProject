import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {ShowDeleteService} from '../show-delete.service';

@Component({
  selector: 'app-single-role',
  templateUrl: './single-role.component.html',
  styleUrls: ['./single-role.component.css']
})
export class SingleRoleComponent implements OnInit {

  role: any;
  id = this.route.snapshot.paramMap.get('id');
  constructor( private route: ActivatedRoute,
               private location: Location,
               private showRoleService: ShowDeleteService) { }

  ngOnInit() {
    this.showDetails();
  }
  showDetails() {
    this.showRoleService.show(this.id).subscribe(
      res => {
        this.role = res.data;
        console.log(res);
      },
      err => console.log(err)
    );
  }
  // deleteRole() {
  //   // const id = +this.route.snapshot.paramMap.get('id');
  //   this.showRoleService.delete(this.id).subscribe(
  //     res => {console.log(res); } ,
  //     err => console.log(err),
  //     () => {window.alert('role deleted successfully'); }
  //   );
  // }
  goBack(): void {
    this.location.back();
  }
}
