function calculate(rate, goal) {
    var rest = goal % rate;
      if (rest == 0) {
            var months = goal/rate;
      } else {
            var months = Math.floor(goal/rate)+1;
      }

      var i;
      
      var values = [];
      var interestRate = 1.004;
      for (i = 1; i <= months; i++) {
            values.push(rate * (Math.pow(interestRate, i) - 1) / (interestRate - 1));
      }

      return values;
}

function chartInput(form) {
      var rate = form.rate.value;
      var goal = form.goal.value;

      var values = calculate(rate, goal);

      $(function() {
            $('#container').highcharts({
                  title: {
                  text: 'Your Savings',
                  },
                  xAxis: {
                  title: {
                      text: 'Months'
                  },
                  categories: values.length
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

QUnit.test("calculate", function (assert) {
     var result = calculate(5,20);
      assert.deepEqual(result, [5, 10.02000000000002, 15.060080000000017, 20.12032032000009], "Passed!");
});