export const dayToSchedule = [
    "No School",
    "Normal",
    "Normal",
    "Normal",
    "Normal",
    "Normal",
    "No School"
]

export const ignoredPeriods= [
          "No School",
          "Before School",
          "Warning Bell",
          "Passing Time",
          "Teacher Time"
];


export const splitPeriods={
      "Period 5": [
              "Period 5, 1st Wave",
              "Period 5, 2nd Wave",
              "Period 5, 3rd Wave"
       ]
}

export function schedule(typeOfDay){
  switch (typeOfDay) {
   case "No School" :
      return [
          {name: "No School", start: "12:00a", end: "12:00a"}
         ];
      break;
    case "Normal": 
      return [
           {name: "Period 1", start: 530, end: 620},
           {name: "Passing Time", start: 620, end: 630},
           {name: "Period 2", start: 630, end: 720}, 
           {name: "Passing Time", start: 720, end: 730},
           {name: "Period 3", start: 730, end: 865},
           {name: "A Lunch", start: 735, end: 765},
           {name: "Passing Time", start: 765, end: 770},
           {name: "B Lunch", start: 770, end: 795},
           {name: "Passing Time", start: 795, end: 800},
           {name: "C Lunch", start: 800, end: 830},
           {name: "Passing Time", start: 865, end: 875},
           {name: "Period 4", start: 875, end: 970},
          ];
      break;
    case "C Day": 
      return [
           {name: "Period 1", start: 530, end: 575},
           {name: "Passing Time", start: 575, end: 578},
           {name: "Period 5", start: 578, end: 623}, 
           {name: "Passing Time", start: 623, end: 626},
           {name: "Period 2", start: 626, end: 671},
           {name: "Passing Time", start: 671, end: 674},
           {name: "Period 6", start: 674, end: 719},
           {name: "Passing Time", start: 719, end: 722},
           {name: "Period 3", start: 722, end: 814},
           {name: "A Lunch", start: 722, end: 767},
           {name: "B Lunch", start: 769, end: 814},
           {name: "Passing Time", start: 814, end: 817},
           {name: "Period 7", start: 817, end: 875},
           {name: "Passing Time", start: 875, end: 885},
           {name: "Period 4", start: 885, end: 922},
           {name: "Passing Time", start: 922, end: 925},
           {name: "Period 8", start: 925, end: 970},
          ];
      break;
  }
}