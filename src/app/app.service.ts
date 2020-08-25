import { Injectable } from "@angular/core";

export class Priority {
    text: string;
    id: number;
}

export class Resource {
    text: string;
    id: number;
    color: string;
}

export class Appointment {
    text: string;
    text1: string;
    ownerId: number[];
    priority: number;
    startDate: Date;
    endDate: Date;
    color: string;
    name: string;
}

let prioritiesData: Priority[] = [
    {
        text: "Week1",
        id: 1,
    }, {
        text: "Week2",
        id: 2,
    }
    , {
        text: "Week3",
        id: 3,
    }
    , {
        text: "Week4",
        id: 4,
    }
    , {
        text: "Week5",
        id: 5,
    }
];
let prioritiesData1: Priority[] = [
    {
        text: "Week1",
        id: 1,
    }
];

let prioritiesData2: Priority[] = [
    {
        text: "Week1",
        id: 1,
    }, {
        text: "Week2",
        id: 2,
    }
];

let resourcesData: Resource[] = [
    {
        text: "Ordinary Shift",
        id: 1,
        color: "#3f48ff"
    }, {
        text: "Afternoon Shift",
        id: 2,
        color: "#4c8955"
    }, {
        text: "Night Shift",
        id: 3,
        color: "#ffc700"
    }, {
        text: "Sleepover Shift",
        id: 4,
        color: "#d71c5e"
    }
]

let appointments: Appointment[] = [{
    "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Ordinary Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'(Continuation)',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Ordinary Shift"
},{
    "text": "1:1 Community Participation",
    "text1": '',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Ordinary Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name": "Sleepover Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Ordinary Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Afternoon Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name": "Sleepover Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Ordinary Shift"
},
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [2],
   "startDate": new Date(2017, 4, 7, 0, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 1,
   "color":"#ff0000",
   "name": "Afternoon Shift"
},{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [3],
   "startDate": new Date(2017, 4, 7, 0, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 1,
   "color":"#ff0000",
   "name": "Night Shift"
},{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [1],
   "startDate": new Date(2017, 4, 7, 0, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 1,
   "color":"#ff0000",
   "name": "Ordinary Shift"
}
,{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 7, 0, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 1,
   "color":"#ff0000",
   "name": "Sleepover Shift"
}
,{
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Ordinary Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Ordinary Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Ordinary Shift"
}, {
    "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Ordinary Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name": "Sleepover Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Ordinary Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name": "Sleepover Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Ordinary Shift"
},
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [1],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#ff0000",
   "name": "Afternoon Shift"
},{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [3],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#ff0000",
   "name": "Night Shift"
},{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [3],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#ff0000",
   "name": "Ordinary Shift"
}
,{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [2],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#ff0000",
   "name": "Sleepover Shift"
}
,{
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name":"Ordinary Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name":"Ordinary Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 8, 0, 0),
    "endDate": new Date(2017, 4, 8, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
},{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 8, 0, 0),
   "endDate": new Date(2017, 4, 8, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
];






let appointments1: Appointment[] = [{
    "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Ordinary Shift"
}, {
    "text": "1:1 Community Participation",
    "text1": '',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 0, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Ordinary Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 8, 0),
    "endDate": new Date(2017, 4, 7, 18, 0),
    "priority": 1,
    "color":"#ff0000",
    "name": "Sleepover Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 7, 9, 40),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 9, 0),
    "endDate": new Date(2017, 4, 7, 18, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Ordinary Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 9, 45),
    "endDate": new Date(2017, 4, 7, 15, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Afternoon Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 8, 0),
    "endDate": new Date(2017, 4, 7, 14, 0),
    "priority": 1,
    "color":"#ff0000",
    "name": "Sleepover Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 8, 0),
    "endDate": new Date(2017, 4, 7, 20, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 8, 0),
    "endDate": new Date(2017, 4, 7, 15, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Ordinary Shift"
},
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [2],
   "startDate": new Date(2017, 4, 7, 9, 0),
   "endDate": new Date(2017, 4, 7, 18, 0),
   "priority": 1,
   "color":"#ff0000",
   "name": "Afternoon Shift"
},{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [3],
   "startDate": new Date(2017, 4, 7, 10, 0),
   "endDate": new Date(2017, 4, 7, 20, 0),
   "priority": 1,
   "color":"#ff0000",
   "name": "Night Shift"
},{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [1],
   "startDate": new Date(2017, 4, 7, 8, 0),
   "endDate": new Date(2017, 4, 7, 19, 0),
   "priority": 1,
   "color":"#ff0000",
   "name": "Ordinary Shift"
}
,{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 7, 7, 15),
   "endDate": new Date(2017, 4, 7, 18, 0),
   "priority": 1,
   "color":"#ff0000",
   "name": "Sleepover Shift"
}
,{
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 9, 15),
    "endDate": new Date(2017, 4, 7, 15, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Ordinary Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 8, 0),
    "endDate": new Date(2017, 4, 7, 13, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 7, 7, 5),
    "endDate": new Date(2017, 4, 7, 19, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 8, 45),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 7, 8, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 9, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 10, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 7, 30),
    "endDate": new Date(2017, 4, 7, 17, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Ordinary Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 8, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 9, 45),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name":"Ordinary Shift"
}, {
    "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 9, 45),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#00ff00",
    "name":"Ordinary Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 8, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 1,
    "color":"#ff0000",
    "name": "Sleepover Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 7, 9, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 8, 20),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Ordinary Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 8, 45),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name": "Sleepover Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 9, 10),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 9, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Ordinary Shift"
},
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [1],
   "startDate": new Date(2017, 4, 7, 8, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#ff0000",
   "name": "Afternoon Shift"
},{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [3],
   "startDate": new Date(2017, 4, 7, 10, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#ff0000",
   "name": "Night Shift"
},{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [3],
   "startDate": new Date(2017, 4, 7, 9, 45),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#ff0000",
   "name": "Ordinary Shift"
}
,{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [2],
   "startDate": new Date(2017, 4, 7, 8, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#ff0000",
   "name": "Sleepover Shift"
}
,{
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 8, 45),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name":"Ordinary Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 8, 35),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 7, 9, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 8, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [3],
    "startDate": new Date(2017, 4, 7, 9, 15),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Night Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 7, 40),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [2],
    "startDate": new Date(2017, 4, 7, 9, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name":"Afternoon Shift"

}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [1],
    "startDate": new Date(2017, 4, 7, 10, 0),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#ff0000",
    "name":"Ordinary Shift"
}, {
     "text": "1:1 Community Participation",
"text1":'',
    "ownerId": [4],
    "startDate": new Date(2017, 4, 7, 8, 30),
    "endDate": new Date(2017, 4, 7, 24, 0),
    "priority": 2,
    "color":"#00ff00",
    "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 7, 9, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 7, 7, 45),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 7, 9, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 7, 8, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 7, 10, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 7, 7, 20),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
},{
    "text": "1:1 Community Participation",
"text1":'',
   "ownerId": [4],
   "startDate": new Date(2017, 4, 7, 9, 0),
   "endDate": new Date(2017, 4, 7, 24, 0),
   "priority": 2,
   "color":"#00ff00",
   "name": "Sleepover Shift"
}, 
];

@Injectable()
export class Service {
    getAppointments(){
        return appointments;
    }
    getAppointments1(){
        return appointments1;
    }
    getPriorities() {
        return prioritiesData;
    }
    getPrioritiesWeek() {
        return prioritiesData1;
    }
    getPrioritiesFort() {
        return prioritiesData2;
    }
    getResources() {
        return resourcesData;
    }
}
