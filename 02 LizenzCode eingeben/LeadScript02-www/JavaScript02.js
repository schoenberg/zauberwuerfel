function httpGet(theUrl) 
{ 
    var xmlHttp = null; 
 
    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.open( "GET", theUrl, false ); 
    xmlHttp.send( null ); 
    return xmlHttp.responseText; 
} 

function CodeKontrollieren(Code)
{
var randomnumber=Math.floor(Math.random()*10000000000000);
var Pfad = "http://thinder.net/software/NewsletterEintragMobi/einloesen.php?gutschein=" + Code + "&Zufall=" + randomnumber;
var Ergebnis=httpGet(Pfad);
return Ergebnis;
}