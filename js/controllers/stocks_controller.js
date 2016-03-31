financialApp.controller('StocksCtrl', ['$scope', 'dateService', 'stockService', function($scope, dateService, stockService){

  $scope.dateInfo = dateService.getDateInfo();
  $scope.stockData = stockService.getStockData();

  $scope.currentDate = $scope.dateInfo.currentDate;
  $scope.currentDateString = $scope.dateInfo.getDateString();

  setTimeout(function(){
    console.log('settimeout');
    $("#date-slider").val(100);
  }, 100);


    
  $scope.currentDateStock = $scope.stockData[$scope.currentDateString];  



}]);

//Taking this out + moving it to the stock service
////go through each day in the days Array String
  //to check every date in the range
  // var genNewDateArray = function(){
  //   for(var i = 0; i < $scope.daysArrayString; i++){
  //     var newStockData = {};
  //     if($scope.stockData[daysArrayString[i]]){
  //       newStockData[i] = $scope.stockData.date[daysArrayString[i]];
  //     }
  //     else{
  //       newStockData[i] = $scope.stockData[daysArrayString[i-1]];
  //     }
  //   }
  //   return newStockData;
  // };

    //want to produce a newStockArray-with values for weekends/holidays
  //pull in the stringified array of dates from startDate-endDate
  // $scope.daysArrayString = dateService.daysArrayConverted(dateService.daysRange());