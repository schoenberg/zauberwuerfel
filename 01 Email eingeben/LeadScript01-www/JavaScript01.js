function httpGet(theUrl) 
{ 
    var xmlHttp = null; 
 
    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.open( "GET", theUrl, false ); 
    xmlHttp.send( null ); 
    return xmlHttp.responseText; 
} 

function LizenzCodeSenden(Email)
{
var randomnumber=Math.floor(Math.random()*10000000000000);
var Pfad = "http://thinder.net/software/NewsletterEintragMobi/NewsLetterEintrag.php?Email=" + Email + "&Zufall=" + randomnumber;
httpGet(Pfad);
}