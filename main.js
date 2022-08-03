



$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 2000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });  
  });




var xValues = ["KABITA (কাবিটা)","TR (টি আর)" ];
var yValues = [55, 49];
var barColors = [
  "#3F82C5",
  "#43A876",
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});

  
var xValues = ["KABITA (কাবিটা)"];
var yValues = [100,];
var barColors = [
  "#3F82C5",
];

new Chart("myChart1", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },

});
  
var xValues = ["রাস্তা", "সোলার", "প্রতিষ্ঠান", "বিবিধ-অন্যান্য", "দুর্যোগ সহনীয় বাসগৃহ নির্মাণ"];
var yValues = [50, 79, 44, 34, 90];
var barColors = ["#D8AA14", "#1E6CB9","#159E5A","#BC6A17","#159E9E"];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Value with Taka"
    }
  }
}); 




var lineCtx =  document.getElementById("lineChart");
var myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
    labels: ["","রাস্তা", "প্রতিষ্ঠান", "বিবিধ-অন্যান্য", ""],
    datasets: [
        {
         
            lineTension: 0.33,
            backgroundColor: "rgba(28, 167, 94, 0.7)",
            borderColor: "rgba(28, 167, 94, 1)",
            pointBorderWidth: 7,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 5,
            data: [40, 49, 50, 41, 56, 55, 40],
            spanGaps: true,
           
        }
    ]
},
options: {
  legend: {display: false},
  title: {
    display: true,
    text: "Value with Matric Ton"
  }
}
    
});
