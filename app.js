var app=angular.module("myApp",[])

app.controller("myController",["$scope",function($scope){
	$scope.message="this is my controller";
	$scope.companyName="Techminds Pvt Ltd";
	$scope.userDetails=[
		{ name:"scott desantnick",address: "Boston, United States"},
		{name:"john galt",address: "california, United States"},
		{name:"robin sharma",address: "newjersey, United States"},
		{name:"justin",address: "florida, United States"}]

	$scope.changeCompanyName=function(){
		$scope.companyName="techminds Solutions";
	}
}])

app.directive("myCustomerDetailsDirective",function(){
	return{

		restrict:"ECMA",
		templateUrl:"customerDetails.html",
		replace: true,
		scope:{

			companyName:'@',
			userDetails:'=',
			change :'&'

		},
		/*ompile : function(element, attributes){

			console.log("In Compile !!!!");
			console.log(element);
			console.log(attributes)
		
		return{
			pre: function(scope,elems,attrs)
			{
				console.log("In preLink...");
				console.log(scope);
				console.log(elems);
				console.log(attrs);
				if(scope.userDetails.name=="robin sharma"){
					elems.removeAttr('class')
				}
			},
			post: function(scope,elems,attrs)
			{
				console.log("In postLink...");
				console.log(scope);
				console.log(elems);
				console.log(attrs);
			}

		}
	}*/

		link:function(scope,elems,attrs){
			console.log("postLink...");
				console.log(scope);
				console.log(elems);
				console.log(attrs);
			}
	}
})