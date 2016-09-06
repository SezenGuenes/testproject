function chartInput(form) {
      var rate = form.rate.value;
      var goal = form.goal.value;

      var rest = goal % rate;
      if (rest == 0) {
            var months = goal / rate;
      } else {
            var months = Math.floor(goal / rate) + 1;
      }

      var i;
      var numMonths = [];
      for (i = 1; i <= months; i++) {
            numMonths.push(i);
      }

      var values = [];
      for (i = 1; i <= months; i++) {
            values.push(rate * (Math.pow(1.004, i) - 1) / 0.004);
      }

      $(function() {
            $('#container').highcharts({
                  title: {
                  text: 'Your Savings',
                  },
                  xAxis: {
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
                  data: values
                  }]
            });
      });
      }