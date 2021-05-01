import {Router, ActivatedRoute} from '@angular/router';
import { FormationService } from '../../../model/services/formation.service';
import { Formation } from '../../../model/entities/Formation';
import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepicker } from '@angular/material/datepicker';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DomaineService } from 'src/app/model/services/domaine.service';
import { Domaine } from 'src/app/model/entities/Domaine';
@Component({
  selector: 'app-add-formation-diag',
  templateUrl: './add-formation-diag.component.html',
  styleUrls: ['./add-formation-diag.component.scss']
})
export class AddFormationDiagComponent implements OnInit {
  domaines:Domaine[]; 
  
  formation: Formation= new Formation();

  
  constructor(router: Router, private route: ActivatedRoute, private domaineservice:DomaineService,private formationservice:FormationService,@Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder) { }
  Form: FormGroup;
  ngOnInit(): void {

    
    this.GetListeDomaine();

    this.Form = this.fb.group({
     
      titre : ['', Validators.required],
      annee: ['', Validators.required],
      duree: ['', Validators.required],
      nb_session: ['', Validators.required],
      budget: ['', Validators.required],
      typeF: ['', Validators.required],
      Dom_domaine_id: ['', Validators.required]
    
    })


  }
  
  
  GetListeDomaine(){
    this.domaineservice.GetAllFormation()
    .subscribe(data=>{this.domaines=data;
    },err=>{
      console.log(err);
    })
}

changeDomaine(value) {
  console.log(value);

}

AddFormation() {
  console.log(this.formation);
  this.formationservice.Post(this.Form.get('Dom_domaine_id').value,this.formation)
    .subscribe(
      res => 
    { 
    console.log(res);
  
  
   

    },
    err=>
    {
      console.log(err);
    } 
      ) 
     
  }
 


}
