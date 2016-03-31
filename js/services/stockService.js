financialApp.factory('stockService', [function(){

  var dataArray = rawData.query.results.quote;
  var _stockData = {};
  var startDate = new Date("1-1-2014");
  var endDate = new Date("7-31-2014");

  var getDateString = function(date){
    var year = date.getFullYear();
    var tempMonth = (date.getMonth()+1);
    var month = (tempMonth <= 9 ? "0" : "") + tempMonth;
    var tempDay = date.getDate()
    var day = (tempDay <= 9 ? "0" : "") + tempDay;
    return year + "-" + month + "-" + day;
  };

  var getPreviousDate = function(date){
    var yesterday = date.getTime()-86400000;
    var yesertdayDate = new Date(yesterday);
    return yesertdayDate;
  };

  var getPreviousWeek = function(date){
    var weekAgo = date.getTime()-7*86400000;
    var weekAgoDate = new Date(weekAgo);
    return weekAgoDate;
  };

  var getPreviousMonth = function(date){
    var monthAgo = date.getTime()-30*86400000;
    var monthAgoDate = new Date(monthAgo);
    return monthAgoDate;
  }


  //Add all possible dates to the _stockData object

  for(var date = startDate; date <= endDate; date.setDate(date.getDate() + 1)){
    var dateString = getDateString(date);
    _stockData[dateString] = "";
  };

  for(var i = 0; i < dataArray.length; i++){
    if(_stockData[dataArray[i].Date] === ""){
      var symbol = dataArray[i].Symbol;
      var price = dataArray[i].Close;
      _stockData[dataArray[i].Date] = {symbol: symbol, price: price}
      }  
      //must add else 
    };




 // //issues with date formatting
 //  for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)){
 //    //d should be a date object
 //    var date = new Date(d);
 //    var dateString = getDateString(date);
 //    for(var j = 0; j < dataArray.length ; j++){
 //      //putting comparison as date object, then as milisec
 //      var arrayDate = new Date(dataArray[j].Date);
 //      if(arrayDate.getTime() === date.getTime()){
 //        var symbol = dataArray[j].Symbol;
 //        var price = dataArray[j].Close;
 //        _stockData[dateString] = {symbol: symbol, price: price}
 //      }    
 //    } 
 //    if(!_stockData[dateString]){
 //      debugger;
 //      var yesterdayString = getDateString(getPreviousDate(date));
 //      var symbol = _stockData[yesterdayString].Symbol;
 //      var price = _stockData[yesterdayString].Close;
 //      _stockData[dateString] = { symbol: symbol, price: price };
 //    }
 //  };

  

  //when I initialize stockData, pre-scrub it
  //first make sure it has every date between start-end, starting w/jan
  // for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
  //     debugger;
  //     _stockData[new Date(d)] = 0;
  // };//that doesnt seem to be working--what's going on with the date formatting?

  // //check if the data array contains info on each day by looping through the stockData object
  // for(var i = 0; i < _stockData.length; i++){

    // //if anywhere in the dataArray, the date exists
    // for(var j = 0; j < dataArray; j++){
    //   //if the date does exist, add the dataArray object to the stockData
    //   if( dataArray[_stockData[i]].Date]){
    //     var date = dataArray[j].Date;
    //     var symbol = dataArray[j].Symbol;
    //     var price = dataArray[j].Close;
    //     _stockData[date] = { date: new Date(date), symbol: symbol, price: price };
    //   }
    //   else{
    //     var date = dataArray[j].Date;
    //     var symbol = dataArray[j-1].Symbol;
    //     var price = dataArray[j-1].Close;
    //     _stockData[date] = { date: new Date(date), symbol: symbol, price: price };
    //   }
        
    // };
  // };


  var getStockData = function() {
    return _stockData;
  };

  return{
    getStockData: getStockData,
    getDateString: getDateString,
    getPreviousDate: getPreviousDate,
    getPreviousWeek: getPreviousWeek,
    getPreviousMonth: getPreviousMonth
  };

}]);

// for ( var i = 0; i < dataArray.length; i++ ) {
  //   var date = dataArray[i].Date;
  //   var symbol = dataArray[i].Symbol;
  //   var price = dataArray[i].Close;
  //   _stockData[date] = { date: new Date(date), symbol: symbol, price: price };
  // }

