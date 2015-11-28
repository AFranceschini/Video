var counter1 = 0;
/*var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;*/

document.ontouchmove = function(event){
    event.preventDefault();
}

$(document).ready(function() {

	if ($('#slide1').hasClass('active')){
        $('#control-prev').css('display','none');
        $('#control-next').css('display','none');

        setTimeout(function(){ 
             $('#main-info').fadeIn("slow");
        }, 800);
       

        $('.slide1').on('tap', function(){
            if(counter1 == 0){
                $(".slide1 #graph02").animate({"bottom":"+=500px"}, 400);
                $(".slide1 #graph03").animate({"bottom":"+=500px"}, 400);
                $(".slide1 #graph04").animate({"left":"+=960px"}, 800);
                counter1+=1;
            }else if(counter1 == 1){
                $(".slide1 #graph05").animate({"bottom":"+=375px"}, 600, function(){
                    $(".slide1 #graph06").removeClass('petite').delay(8000).addClass('grande');
                    setTimeout(function(){ 
                        $(".slide1 #graph07").removeClass('petite').delay(8000).addClass('grande');
                    }, 2000);
                }); 
                counter1+=1;
            }else if(counter1 == 2){
                $(".slide1 #graph08").animate({"bottom":"+=375px"}, 600, function(){
                    $(".slide1 #graph09").fadeIn("slow");
                    setTimeout(function(){ 
                       $(".slide1 #graph10").animate({"bottom":"+=180px"}, 400);
                    }, 2500);

                    setTimeout(function(){ 
                         $('#control-next').css('display','block');
                    }, 2500);
                });
                counter1+=1;
            }
        });
    }
});

