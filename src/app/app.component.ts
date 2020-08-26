import { Component,ChangeDetectorRef } from '@angular/core';
import {Priority, Resource, Appointment, Service} from './app.service';
import * as $ from 'jquery' 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  appointmentsData: Appointment[];
    resourcesData: Resource[];
    prioritiesData: Priority[];
    currentDate: Date = new Date(2017, 4, 1);
    viewAll = false;
    count=26;
    height;
    currHeight=290;
    currView = 4;
    duration=60;
    startDayHour;
    endDayHour;
    buttonLabel = "Expanded View";

    constructor(private service: Service,private cdr: ChangeDetectorRef) {
        
        this.resourcesData = service.getResources();
        this.getPriorityData();
        this.calcHeight();
        this.getAppointmentDat();
        this.getHours();
    }

     ngAfterViewInit(){ 
      this.loopMonthView();
     }

    getPriorityData(){
      if(this.currView == 1){
        this.prioritiesData = this.service.getPrioritiesWeek();
      }else if(this.currView == 2) {
        this.prioritiesData = this.service.getPrioritiesFort();
      }else if(this.currView == 3){
        this.prioritiesData = this.service.getPriorities();
      }else{
        this.prioritiesData = this.service.getPriorities();
      }
    }

    getAppointmentDat(){
      if(this.currView == 4){
        this.appointmentsData = this.service.getAppointments1();
      }else{
        this.appointmentsData = this.service.getAppointments();
      }
    }

    getHours(){
      if(this.currView == 4){
        this.startDayHour = '07';
        this.endDayHour = '20';
      }else{
        this.startDayHour = '00';
      	this.endDayHour = '24';
      }
      
    }

    calcHeight() {
      this.height = this.count * this.currHeight;
    }
    
    optionChanged(event){ 
      if(event.name === 'currentView'){
        if(event.value === 'Weekly'){
          this.currView = 1;
          this.currHeight = 180;
          this.duration = 1440;
        }else if(event.value === 'Fortnightly'){
          this.currView = 2;
          this.currHeight = 180;
          this.duration = 1440;
          // this.currHeight = 800;
        }else if(event.value === 'Monthly'){
          this.currView = 3;
          this.currHeight = 800;
          this.duration = 1440;
          
        }else{
          this.currView = 4;
          this.currHeight = 290;
          this.duration = 60;
        }
        this.getPriorityData();
        this.calcHeight();
        this.getAppointmentDat();
        this.getHours();
        this.cdr.detectChanges();
        this.loopMonthView();
      }else if(event.name === "currentDate"){
        this.calcHeight();
        this.loopMonthView();
      }
     

    }
    changeView(){
      this.viewAll = !this.viewAll;
      if(this.viewAll) {
        this.buttonLabel = "Limited View"
      }else{
        this.buttonLabel = "Expanded View"
      }
    }

    loopMonthView(){
      let original_ht = this.height;
      $(".dx-scheduler").height(original_ht);
      if(this.currView == 3){
        let dateArr = ['01','02'];
        setTimeout(function(){
          $(".dx-scheduler-date-table-row").each(function() {
            let flag = false;
            $.each(this.cells, function(){
                const value = $(this).text();
                if(dateArr.includes(value)){ 
                  flag = true;
                  let index = dateArr.indexOf(value);
                  dateArr.splice(index, 1);
                }
            });
            
            if(!flag){
              let newHt = $(this).height() - 200;
              let schdulerHt =  $(".dx-scheduler").height() - newHt;
              $(this).height(200);
              $(".dx-scheduler").height(schdulerHt)
            }
          });
        }, 2000);
        
      }
      
    }
}
