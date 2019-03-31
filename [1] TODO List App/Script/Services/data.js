'use Strict';

angular.module('TodoList')
    .service('DataService', function ($http) {

        this.gettodo = function (callback) {
            $http.get('https://raw.githubusercontent.com/Apoorve8055/Quick_Start_With_Angularjs/master/%5B1%5D%20TODO%20List%20App/mocks/todo.json')
                .then(callback);
        }

        this.deletetodo = function (todo) {
            console.log("The " + todo.data + " Has been deleted !");
        }
        this.savetodo = function (todo) {
            console.log("The " + todo.data + " Has been Saved ");
        }
    });
