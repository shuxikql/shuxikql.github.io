
dashboard.controller("HomeController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    vm.showDetails = true;
    vm.home = {};

    vm.home.headDesc = [
        {
            desc:"用户",
            number:"500+",
            theme: "aqua",
            icon:"group"
        },
        {
            desc:"活跃",
            number:"200+",
            theme: "yellow",
            icon:"fire"
        },
        {
            desc:"天气",
            number:"Sunny",
            theme: "red",
            icon:"cloud"
        },
        {
            desc:"心情",
            number:"棒呆",
            theme: "green",
            icon:"thumbs-o-up"
        }
    ];

    vm.home.Feeds = [
        {
            user: "朱萌萌",
            text: "啊哈哈哈哈，切勿闷声作大死",
            time: "1 hour ago"
        },
        {
            user: "周萌萌",
            text: "啊哈哈哈哈，今天天气真棒，起来嗨",
            time: "1 hour ago"
        },
        {
            user: "王萌萌",
            text: "你躲在柜子里面,看着碗中的浓烟 灌入瓶中的时间,冰霜覆盖的笑脸",
            time: "2 hours ago"
        },
        {
            user: "张萌萌",
            text: "你剪断你的十年，用妆擦干泪两间，戏里戏外的语言，青山锁欲醉两年，雨落在他的嘴边，与泪缠绵忆晴天，畏惧寒冷的大雁，奔向了南边",
            time: "2 hours ago"
        },
        {
            user: "韩梅梅",
            text: "三月的烟雨 飘摇的南方 你坐在你空空的米店 你一手拿着苹果 一手拿着命运 在寻找你自己的香",
            time: "3 hours ago"
        },
        {
            user: "李雷",
            text: "尼康D750作为尼康全画幅系列里的中端相机，集专业性能与灵巧轻便于一身，各方面实力都非常均衡的它究竟能带来怎样的拍摄体验，本期编辑将带着尼康D750行走在香港的闹区街头，感受灵感完全被释放的自由行摄。",
            time: "3 hours ago"
        }
    ];

    vm.home.tools = [
       {
           Software: "Mongo DB",
           Percentage: "80",
           theme: "yellow",
           image: "mongodb"
       },
       {
           Software: "Express JS",
           Percentage: "75",
           theme: "aqua",
           image: "express",
           progressbar: "blue"
       },
       {
           Software: "Angular JS",
           Percentage: "85",
           theme: "green",
           image: "angular",
           progressbar: "blue"
       },
       {
           Software: "Node JS",
           Percentage: "83",
           theme: "lime",
           image: "node",
           progressbar: "blue"
       },
       {
           Software: "Javascript",
           Percentage: "80",
           theme: "maroon",
           image: "javascript",
           progressbar: "blue"
       },
       {
           Software: "Type Script",
           Percentage: "70",
           theme: "Gray",
           image: "typescript",
           progressbar: "blue"
       },
       {
           Software: "jQuery & AJAX",
           Percentage: "80",
           theme: "yellow",
           image: "jquery",
           progressbar: "blue"
       },
       {
           Software: "Joomla",
           Percentage: "85",
           theme: "red",
           image: "joomla",
           progressbar: "blue"
       },
        {
            Software: "HTML 5",
            Percentage: "90",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3",
            Percentage: "83",
            theme: "aqua",
            image: "css3",
            progressbar: "blue"
        },
        {
            Software: "SAAS",
            Percentage: "72",
            theme: "green",
            image: "saas-css",
            progressbar: "blue"
        },
        {
            Software: "Bootstrap",
            Percentage: "85",
            theme: "lime",
            image: "bootstrap",
            progressbar: "blue"
        },
        {
            Software: "Photo Shop",
            Percentage: "90",
            theme: "maroon",
            image: "photoshop",
            progressbar: "blue"
        },
        {
            Software: "Corel Draw",
            Percentage: "95",
            theme: "Gray",
            image: "coreldraw",
            progressbar: "blue"
        },
        {
            Software: "Flash",
            Percentage: "65",
            theme: "yellow",
            image: "flash",
            progressbar: "blue"
        }
    ];

    vm.home.Study = [
        {
            title:"Font Awesome",
            url:"http://www.bootcss.com/p/font-awesome/",
            img:'./images/home/font-awosome.jpg'
        },
        {
            title:"ChartJs",
            url:"http://www.bootcss.com/p/chart.js/",
            img:"./images/home/chartjs.jpg"
        },
        {
            title:"ReactJs",
            url:"http://reactjs.cn/react/index.html",
            img:"./images/home/reactJs.jpg"
        },
        {
            title:"Bootstrap",
            url:"http://v3.bootcss.com/",
            img:"./images/home/bootstrap.jpg"
        },
        {
            title:"HTML5",
            url:"http://www.w3school.com.cn/html5/",
            img:"./images/home/HTML5.jpg"
        },
        {
            title:"PHP",
            url:"http://www.php.net/",
            img:"./images/home/PHP.jpg"
        },
        {
            title:"Git教程",
            url:"http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/",
            img:"./images/home/Git.jpg"
        },
        {
            title:"Python",
            url:"https://www.python.org/",
            img:"./images/home/python.jpg"
        }
    ];

    //Tools I use Carousel
    $("#owl-demo").owlCarousel({


        items: 8, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    });
    $("#owl-demo").trigger('owl.play', 2000);

    // Custom Navigation Events
    $(".next").click(function () {
        $("#owl-demo").trigger('owl.next');
    })
    $(".prev").click(function () {
        $("#owl-demo").trigger('owl.prev');
    })
    $(".play").click(function () {
        $("#owl-demo").trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        $("#owl-demo").trigger('owl.stop');
    })

    //cartoon photo slider carosusel
    $("#owl-single").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 5000, //Set AutoPlay to 3 seconds
    });
}]);

