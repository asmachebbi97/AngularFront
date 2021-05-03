
import {Router, ActivatedRoute} from '@angular/router';
import { FormationService } from '../../../model/services/formation.service';
import { Formation } from '../../../model/entities/Formation';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddFormationDiagComponent } from '../add-formation-diag/add-formation-diag.component';
import { ModifFormationDiagComponent } from '../modif-formation-diag/modif-formation-diag.component';

import { SelectionModel } from '@angular/cdk/collections';
import { MatDatepicker } from '@angular/material/datepicker';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.scss']
})
export class ListeFormationComponent implements OnInit {
  selectedRow:any;
  formations:Formation[]; 
  displayedColumns = ['Sujet', 'Années', 'Nombre', 'duree','budget', 'typeF','domaine','action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private toastr: ToastrService,router: Router, private route: ActivatedRoute, private formationservice:FormationService,private diag: MatDialog,) { }




  ngOnInit() {
    this.GetListeFormation();
    
    
   
  }

  GetListeFormation(){
    this.formationservice.GetAllFormation()
    .subscribe(data=>{this.formations=data;
    },err=>{
      console.log(err);
    })}


    Delete(){
      
      
  
    }

  


  AddDialog() {
    
    const diagref = this.diag.open(AddFormationDiagComponent, {
      width: '650px',
      height: 'auto',
     
      disableClose: true,
    }) .afterClosed().subscribe((res => {
      this.GetListeFormation();
    }));;
   
    
  }


  ModifDialog(msg) {
    const newMsg = Object.assign({}, msg);
  console.log(msg);
  

    
     const diagref = this.diag.open(ModifFormationDiagComponent, {
      width: '650px',
      height: 'auto',
    data:{message:newMsg,
    }
    }).afterClosed().subscribe(result => {
      if (result!=false) 
      {  
      this.formationservice.Put(result.message.idFormation,result.message).subscribe((data) => {
        this.GetListeFormation();
        this.toastr.success('Formation modifié avec succee!')
      }, (error) => {
        console.log(error);
        this.toastr.error('erreur' );
        

      });
    }
    

    
  
   


    });;
  
   
    
  }
  
  
 

  
}



