

angular.module('slim').service('sprintTaskService', function ($http) {

    var sprintTaskService = {

        loadDummyData : function () {
            alert('inside the dummy');
            return  $http.get("data/data.json");
        }

    };
    

  return sprintTaskService;

});