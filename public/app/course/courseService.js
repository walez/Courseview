angular.module('CourseService', [])
    .factory('Course', ['$http', function($http){
        return {
            get: function() {
                return $http.get('/api/course');
            },
            
            create: function(course) {
                return $http.post('/api/course', course);
            },
            
            delete: function(id) {
                return $http.delete('/api/course/'+id);
            }
        }
    }]);