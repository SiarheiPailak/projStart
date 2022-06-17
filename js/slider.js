let n = 1, max = 6; 

    function changePic(){
        if(n > max) n = 1;
        slider_jmg.src = `images/slider/${n++}s.JPG`;
        setTimeout(changePic, 4000);
        };



