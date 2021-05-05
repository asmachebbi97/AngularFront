import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { ToastrModule , ToastContainerModule} from 'ngx-toastr';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    MatDatepickerModule,
    ToastrModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-right',
      preventDuplicates:false
     }),
    ToastContainerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
