
var speed=1000;
input_arr_speed.addEventListener("input",vis_speed);

/* function to change speed of visualisation */

function vis_speed(){
    var arr_speed=input_arr_speed.value;
    switch(parseInt(arr_speed)){
        case 1: speed=1;break;
        case 2: speed=10;break;
        case 3: speed=100;break;
        case 4: speed=1000;break;
        case 5: speed=10000;break;
    }
    delay_time=1000/(Math.floor(array_size/10)*speed);

}

var delay_time=1000/(Math.floor(array_size/10)*speed);
var c_delay=0;


/*function for updating bar color and bar heights for visualization of various algoriths*/
function div_update(arr_cont,height,color){
   window.setTimeout(function(){
    arr_cont.style="margin:0%"+margin_size + "%;width:"+(100/array_size-(2*margin_size))+ "%; height:"+height + "%; background-color :"+color + ";";
   },c_delay+=delay_time) ;
}

/*function for enabling other buttons after the algorithm finishes */
function enable_buttons(){
    window.setTimeout(function(){        
        input_arr_size.disabled=false;
        input_generate.disabled=false;
        input_arr_speed.disabled=false;
        for(var i=0;i<algo_buttons.length;i++){    
            algo_buttons[i].disabled=false;        
        }
    },c_delay+=delay_time);
}
