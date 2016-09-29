function calculate(rate, goal) {
    var rest = goal % rate;
      if (rest == 0) {
            var months = goal/rate;
      } else {
            var months = Math.floor(goal/rate)+1;
      }

      var i;
      var numMonths = 0;
      var values = [];
      var interestRate = 1.004;
      for (i = 1; i <= months; i++) {
            numMonths++;
            values.push(rate * (Math.pow(interestRate, i) - 1) / (interestRate - 1));
      }

      console.log(values, numMonths);
      return [values, numMonths];
}

function chartInput(form) {
      var rate = form.rate.value;
      var goal = form.goal.value;

      var result = calculate(rate, goal);
      var values = result[0];
      var numMonths = result[1];

      $(function() {
            $('#container').highcharts({
                  title: {
                  text: 'Your Savings',
                  },
                  xAxis: {
                  title: {
                      text: 'Months'
                  },
                  categories: numMonths
                  },
                  yAxis: {
                  title: {
                        text: 'Amount Reached'
                  },
                  plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                  }]
                  },
                  series: [{
                  showInLegend: false,
                  data: values
                  }], 
                  credits: {
                  enabled: false
                  }
            });
      });
      }
