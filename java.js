/*Word Box
    Array of Words [];
    choosing these words at random;
    putting this words one character at a time into an array;
    

// Attempts
on click it's counting down
end game condition
5 attempts

// Wrong Guess Box
letters will redisplay
just a string in a tag "


//Right Guess Box
3 letter words only


// Win number box
show the amount of wins


//Reset Button
on click resets value*/
 var simpleWords=["cat","dog","hat","pin","pig","dig",];
 var randomWords=Math.floor(Math.random()*simpleWords.length);
 var str;
 var WordSplit=[];
 function selector(){
    var i=0;
    for(i=0; i<3; i++) {
        str = simpleWords[randomWords];
        WordSplit.push(str.charAt(i));



    }

 }
selector();
 console.log(WordSplit);


 