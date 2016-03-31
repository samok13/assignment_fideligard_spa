financialApp.factory('dateService', [function(){

  var _dateInfo = { startDate: new Date("1-1-2014"),
                    endDate: new Date("7-31-2014"),
                    dateSelection: 0,
                    currentDate: new Date("1-1-2014"),
                    dateRange: function() {
                      var range = Math.round( ( this.endDate.getTime() - this.startDate.getTime() ) / (1000*60*60*24) );
                        return range;
                    },
                    setCurrentDate: function() {
                      var start = this.startDate.getTime();
                      var selection = this.dateSelection * (1000*60*60*24);
                      console.log(this.dateSelection);
                      var newDate = new Date( start + selection );
                      this.currentDate = newDate;
                    },
                    getDateString: function(){
                      var year = this.currentDate.getFullYear();
                      var tempMonth = (this.currentDate.getMonth()+1);
                      var month = (tempMonth <= 9 ? "0" : "") + tempMonth;
                      var tempDay = this.currentDate.getDate()
                      var day = (tempDay <= 9 ? "0" : "") + tempDay;
                      var dateString = year + "-" + month + "-" + day;
                      //console.log(dateString);
                      return dateString;
                    }
                  };
  

  var getDateInfo = function(date) {
    return _dateInfo;
  };

  return{
    getDateInfo: getDateInfo
  };

}]);


// ///want to create an array startDate-endDate (jan-july)        
//   var daysRange = function(startDate, endDate){
//     var daysArray = [];
//     for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
//       daysArray.push(new Date(d));
//     }
//     return daysArray;
//   };

//   var daysArrayConverted = function(daysArray){
//     var daysArrayString = [];
//     for(var i = 0; i < daysArrayString.length; i++){
//       daysArrayString.push(moment(daysArray[i]).format('YYYY- MMMM-Do'));
//     }
//     debugger;
//     return daysArrayString;
//   };
  //not returning the array I want
  //should be an array of date objects from jan-july (startDate to endDate)