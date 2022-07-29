const setOfWords = ["Hi I am Amir and I Love to Code", "Tell me About Yourself, I also want to know something", "Please become an extrovert and speak Confidentially"];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('myWords');
const btn = document.getElementById('btn');
let startTime,endTime;

const playGame = ()=>{
    let randomText = Math.floor(Math.random()*setOfWords.length)
    msg.innerText = setOfWords[randomText];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText ='Done';
}

const compareWords=(str1,str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;
    words1.forEach(function(item,index){
        if(item == words2[index]){
            count++;
        }
    });
    let errorWords = (words1.length - count)
    return(count + " correct out of "+words1.length+" words and the total number of error are "+errorWords+".");
}

const wordCounter = (totalStr)=>{
    let response = totalStr.split(" ").length;
    return response;
}

const endPlay=()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    console.log(totalTime);
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount/totalTime) * 60);
    let finalMsg = "You typed total at  "+speed+" words per Minutes speed. "
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;
}

btn.addEventListener('click',function(){
    if (this.innerText == 'Start'){
        typeWords.disabled=false;
        typeWords.value = '';
        playGame(); 
    }
    else if(this.innerText == "Done"){
        // check();
        typeWords.disabled=true;
        this.innerText = 'Start';
        endPlay();
    }
})