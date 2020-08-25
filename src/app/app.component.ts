import { Component } from '@angular/core';
import {Priority, Resource, Appointment, Service} from './app.service';

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
    currentDate: Date = new Date(2017, 4, 7);
    viewAll = false;
    count=25;
    height;
    currHeight=290;
    currView = 4;
    startDayHour;
    endDayHour;
    buttonLabel = "Expanded View";

    constructor(private service: Service) {
        
        this.resourcesData = service.getResources();
        this.getPriorityData();
        this.calcHeight();
        this.getAppointmentDat();
        this.getHours();
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
    clicked(event){
      // alert(event);
    }
    optionChanged(event){
      if(event.name === 'currentView'){
        if(event.value === 'Weekly'){
          this.currView = 1;
          this.currHeight = 180;
        }else if(event.value === 'Fortnightly'){
          this.currView = 2;
          this.currHeight = 330;
        }else if(event.value === 'Monthly'){
          this.currView = 3;
          this.currHeight = 800;
        }else{
          this.currView = 4;
          this.currHeight = 290;
        }
        this.getPriorityData();
        this.calcHeight();
        this.getAppointmentDat();
        this.getHours();
      }
      console.log("start",this.startDayHour);
      console.log("end", this.endDayHour);

    }
    changeView(){
      this.viewAll = !this.viewAll;
      if(this.viewAll) {
        this.buttonLabel = "Limited View"
      }else{
        this.buttonLabel = "Expanded View"
      }
    }
}
