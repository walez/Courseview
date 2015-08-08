'use strict'

var headers = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var courses = [{coursename: "csc301", color: "blue", time: [{coursetime: 7, courseday: "Monday", courselocation: "Room 1"}, 
                                                            {coursetime: 8, courseday: "Monday", courselocation: "Room 1"},
                                                            {coursetime: 12, courseday: "Tuesday", courselocation: "Edozien"}, 
                                                            {coursetime: 17, courseday: "Friday", courselocation: "MPH"}]},
               {coursename: "csc302", color: "green", time: [{coursetime: 7, courseday:"Tuesday", courselocation: "Room 4", },
                                                            {coursetime: 7, courseday:"Thursday", courselocation: "Room 4", }]},
               {coursename: "csc304", color: "yellow", time:[{coursetime: 7, courseday:"Thursday", courselocation: "Room 15"},
                                                              {coursetime: 8, courseday:"Thursday", courselocation: "Edozien"},
                                                              {coursetime: 17, courseday:"Thursday", courselocation: "Edozien"},
                                                              {coursetime: 7, courseday:"Saturday", courselocation: "Room 2"}]},
               {coursename: "csc307", color: "cyan", time: [{coursetime: 8,courseday:"Wednesday", courselocation: "Room 9"},
                                                              {coursetime: 14, courseday:"Wednesday", courselocation: "Hall B"},
                                                              {coursetime: 12, courseday:"Wednesday", courselocation: "Room 2"},
                                                              {coursetime: 13, courseday:"Wednesday", courselocation: "Room 2"}]},
               {coursename: "csc310", color: "red", time: [{coursetime: 16, courseday: "Monday", courselocation: 'Hall B'}, 
                                                            {coursetime: 17, courseday: "Monday", courselocation: 'Hall B'},
                                                            {coursetime: 12, courseday: "Tuesday", courselocation: 'Hall B'},
                                                            {coursetime: 9, courseday:"Thursday", courselocation: "MPH"}]}
              ];

var dayTimes = function(){
    this.Monday = {};
    this.Tuesday = {};
    this.Wednesday = {};
    this.Thursday = {};
    this.Friday = {};
    this.Saturday = {};
}

function course_loop(c){
    var index;
    for(index = 0; index < c.time.length; index++){
        times2[c.time[index].coursetime][c.time[index].courseday] = c;
    }
}

var times2 = {
        7 : new dayTimes() ,
        8 : new dayTimes() ,
        9 : new dayTimes() , 
        10: new dayTimes() ,
        11: new dayTimes() ,
        12: new dayTimes() ,
        13: new dayTimes() ,
        14: new dayTimes() , 
        15: new dayTimes() ,
        16: new dayTimes() ,
        17: new dayTimes() ,
        18: new dayTimes() ,
        19: new dayTimes()
};

courses.forEach(course_loop);
console.log(times2);
   
angular.module('courseview.timetable', ['courseview.courseModal'])
    .controller('TimetableController', ['$scope', 'timetableServ', '$modal', function($scope, timetableserv, $modal){
        $scope.start = 1;
        $scope.headers = headers;
        $scope.courses = courses;
        $scope.times = times2;
        $scope.title = 'Timetable Controller2';
        
        $scope.open = function(){
            var $modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'views/course.create.modal.html',
                    controller: 'courseEditModalCtrl',
                }
            );
        };
    }]);