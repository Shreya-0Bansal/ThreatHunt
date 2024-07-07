(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sidebar Toggler
  $(".sidebar-toggler").click(function () {
    $(".sidebar, .content").toggleClass("open");
    return false;
  });

  // Chart Global Color
  Chart.defaults.color = "#6C7293";
  Chart.defaults.borderColor = "#000000";

  // Worldwide Sales Chart
  var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
  var myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["2020", "2021", "2022","2023","2024"],
      datasets: [
        {
          label: "Network Security",
          data: [6,8,12,20,15],
          backgroundColor: "rgba(235, 114, 22, .7)",
        },
        {
          label: "SVM",
          data: [10,5,8,6,7],
          backgroundColor: "rgba(235, 114, 22, .5)",
        },
        {
          label: "Web Security",
          data: [4,8,5,4,7],
          backgroundColor: "rgba(235, 114, 22, .3)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "white" 
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "white" 
          }
        }]
      }
    },
  });

  // Salse & Revenue Chart
  var ctx2 = $("#revenue").get(0).getContext("2d");
  var myChart2 = new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["2021", "2022", "2023", "2024", "2025", "2026", "2027"],
      datasets: [
        {
          label: "Revenue [$]",
          data: [197.4, 289.32, 335.29, 381.25, 427.21, 473.17, 519.13],
          backgroundColor: "rgba(235, 114, 22, 0.5)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "white" 
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "white" 
          }
        }]
      }
    },
  });

  // Single Line Chart
  var ctx3 = $("#line-chart").get(0).getContext("2d");
  var myChart3 = new Chart(ctx3, {
    type: "line",
    data: {
      labels: ["2018","2019","2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "Data Breaches [%]",
          fill: false,
          borderColor: "rgba(235, 114, 22, .3)", 
          backgroundColor: "rgba(235, 114, 22, .7)",
          data: [43, 32, 46, 38, 39, 32],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "white" 
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "white" 
          }
        }]
      }
    },
  });

  // Single Bar Chart
  var ctx4 = $("#bar-chart").get(0).getContext("2d");
  var myChart4 = new Chart(ctx4, {
    type: "bar",
    data: {
      labels: [
        "Phishing Attack",
        "Computer Virus",
        "Employeer Error",
        "APT's",
        "Unsecure Wi-Fi",
        "Unencrypted Data",
        "Third-Party Vendor Error",
        "Denial of Service Attack",
      ],
      datasets: [
        {
          backgroundColor: [
            "rgba(235, 114, 22, .74)",
            "rgba(235, 114, 22, .7)",
            "rgba(235, 114, 22, .65)",
            "rgba(235, 114, 22, .6)",
            "rgba(235, 114, 22, .5)",
            "rgba(235, 114, 22, .4)",
            "rgba(235, 114, 22, .35)",
            "rgba(235, 114, 22, .3)"
          ],
          data: [25, 22, 12, 10, 9, 8, 7, 7],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "white" 
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "white"
          }
        }]
      }
    },
  });

  // Pie Chart
  var ctx5 = $("#pie-chart").get(0).getContext("2d");
  var myChart5 = new Chart(ctx5, {
    type: "pie",
    data: {
      labels: ["Australia", "Canada", "France", "India", "South Africa"],
      datasets: [
        {
            backgroundColor: [
                "rgba(255, 165, 0, .7)",
                "rgba(255, 140, 0, .6)",
                "rgba(255, 69, 0, .5)",  
                "rgba(255, 0, 0, .4)",
                "rgba(220, 20, 60, .3)", 
            ],            
          data: [2204, 5788, 1972, 3131, 1790],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Doughnut Chart
  var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
  var myChart6 = new Chart(ctx6, {
    type: "doughnut",
    data: {
      labels: [
        "Ransomware",
        "Unknown/Other",
        "Compromised",
        "Social Engineering",
        "Malware",
      ],
      datasets: [
        {
            backgroundColor: [
                "rgba(139, 69, 19, .7)", // Saddle Brown (dark yellow-brown)
                "rgba(178, 34, 34, .6)", // Firebrick (dark red)
                "rgba(205, 92, 92, .5)", // Indian Red (lighter red)
                "rgba(220, 20, 60, .4)", // Crimson (deeper red)
                "rgba(255, 0, 0, .3)",   // Red (full red)
            ],
            
        
          data: [53, 28, 9, 6, 4],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
})(jQuery);