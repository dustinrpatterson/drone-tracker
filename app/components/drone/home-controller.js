(function () {

  angular.module('drone-tracker')
        .component('home', {
            templateUrl: 'app/components/drone/home.html?' + Date.now(),
            controller: HomeController
                    })


                    
    HomeController.$inject = ['DroneService']
    
    function HomeController(DroneService) {
        var hc = this;

        hc.getAll = function(){
        DroneService.getAllStrikes(function(res){
                    // debugger
            console.log(res.data.strike)
            return res.data.strike
        })
        }
        


        // TYPED.JS ANIMATION

        $('#drone-intro').typeIt({
            strings: [
                        'The US government has conducted over <span class="accent">400</span> covert drone strikes since the year 2001.',
                        'By some estimates, the perpetrators kill <span class="accent">9</span> innocent civilians for every <span class="accent">1</span> terrorist.',
                        '<span class="accent">Drone Tracker</span> is here to expose them.'
                     ],
            lifeLike: true,
            loop:false,
            loopDelay:1000,
            speed:80,
            startDelay:600,
            breakDelay: 2000,
            breakLines: true,
            callback: ()=>$('#drone-intro').fadeOut(1000)
        });
        setInterval(()=>{
            $('#scroll-down').fadeToggle();
        }, 1000)




}

})(); 




// (function() {
// var scripts = {

// }
// var styles = {

// }
// function ScriptTemplate(obj){
    
// }
//     $("#someElement").append( script );

// })();