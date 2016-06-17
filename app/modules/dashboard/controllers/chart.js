dashboard.controller("ChartController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    $(function () {
        var dom = document.getElementById("user-job").getContext("2d");

        var config = {
            type: 'radar',
            data: {
                labels: ["运维", "后台研发", "前端开发", "全栈工程师", "设计师", "综合", "人力"],
                datasets: [{
                    label: "实际人数",
                    backgroundColor: "rgba(190,120,225,0.3)",
                    pointBackgroundColor: "rgba(220,220,220,1)",
                    data : [65,59,73,31,56,21,12]
                },
                    {
                    label: "期待人数",
                    backgroundColor: "rgba(100,150,120,0.3)",
                    pointBackgroundColor: "rgba(151,187,040,1)",
                    hoverPointBackgroundColor: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data : [55,66,36,60,30,12,30]
                }]
            },
            options: {
                legend: {
                    position: 'left'
                },
                title: {
                    display: true,
                    text: ''
                },
                scale: {
                    reverse: false,
                    gridLines: {
                        color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        };
        var myChart = new Chart(dom, config);

        console.log("coming to chart controller");


        var cid = document.getElementById("user-increase").getContext("2d");
        var config_ins = {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
                datasets: [{
                    label: "月净增长人数",
                    data: [12, 5, -4, 1, -5, 3, 9,-10,3,6,-3,2],
                    fill: true,
                    borderDash: [5, 5],
                    fillColor : "rgba(220,220,220,0.5)",
                    strokeColor : "rgba(080,180,120,0.8)",
                    pointColor : "rgba(080,220,220,1)",
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'bottom',
                },
                hover: {
                    mode: 'label'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                },
                title: {
                    display: true,
                    text: ''
                }
            }
        };
        var myLine = new Chart(cid, config_ins);
    })
}]);

