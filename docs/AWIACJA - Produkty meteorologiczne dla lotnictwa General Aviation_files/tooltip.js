function tipmessage(evt,aport){
    messwin=document.getElementById("tltip");
    messwin.style.visibility="visible";
    dY=document.documentElement.scrollTop;
    X=evt.clientX;    
    Y=evt.clientY+dY;
    
    messwin.style.left=X+"px";
    messwin.style.top=Y+"px";
    tipcontent=fmetar10;
    
    info=metar(aport);
    info+=taf(aport);
    messwin.innerHTML=info;
//    alert(X);
}

function tiphide(){
    messwin=document.getElementById("tltip");
    messwin.style.visibility="hidden";
}

function metar(aport){
    var retval="";
    var regval= new RegExp("METAR[COR\\s]*"+aport+"[\\w\\s-+<>\\/]*=");
    r=regval.exec(fmetar10);
    retval="<b>METAR GG00:</b><br>"+r+"<br><br>";
    r=regval.exec(fmetar05);
    retval+="<b>METAR GG30:</b><br>"+r+"<br><br>";    
    return retval;
};

function taf(aport){
    var retval="";
    var regval= new RegExp("TAF[AMDCOR\\s]*"+aport+"[\\w\\s-+<>\\/]*=");
    r=regval.exec(ftaffc);
    if(r) retval="<b>TAF FC:</b><br>"+r+"<br><br>";
    r=regval.exec(ftafft);
    if(r)retval="<b>TAF FT:</b><br>"+r+"<br><br>";    
    return retval;
};