angular.module("TodoList",[])
.controller('mainCCtrl',function($scope,DataService,$http){

    $scope.learningngChange = function(){
        console.log("input change ");
    }

    DataService.gettodo(function(response){
    		console.log(response.data);
        $scope.todos = response.data;
    });

    $scope.deletetodo = function(todo,index){
        DataService.deletetodo(todo);
        $scope.todos.splice(index,1);
    }

    $scope.savetodo = function(todo){
        DataService.savetodo(todo);

    }

    $scope.addtodo = function(){
        var todo = {data : "This is new todo"};
        console.log(todo);
        $scope.todos.push(todo);
    };


})
    .service('DataService',function($http){

        this.gettodo = function(callback){
        	$http.get('https://raw.githubusercontent.com/Apoorve8055/Quick_Start_With_Angularjs/master/%5B1%5D%20TODO%20List%20App/mocks/todo.json')
        .then(callback);
        }

        this.deletetodo = function(todo){
            console.log("The "+ todo.data + " Has been deleted !");
        }
        this.savetodo = function(todo){
           console.log("The "+ todo.data + " Has been Saved ");
        }
    });
