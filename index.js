//8236055700

var bjpCount = 0;
var congCount = 0;
var mnsCount = 0;

function counter1(){
   bjpCount++;
   console.log(bjpCount);
}

function counter2(){
    congCount++;
    console.log(congCount);
}

function counter3(){
    mnsCount++;
    console.log(mnsCount);
}

function submit(){
    let total = bjpCount+mnsCount+congCount;
    document.getElementById('displayBjp').innerHTML = "BJP Votes are " + bjpCount;
    document.getElementById('displayCong').innerHTML = "congress Votes are " + congCount;
    document.getElementById('displayMns').innerHTML = "mns Votes are " + mnsCount;
    document.getElementById('total').innerHTML = "Total Votes are " + total;
}



// let congress = document.getElementById('congressCount').innerHTML;
//    let mnsCount = document.getElementById('mnscount').innerHTML;

//    if(bjp == "BJP"){
//     bjpCount++;
//    }
//    if(congress == "Congress"){
//     congCount++;
//    }
//    if(mnsCount == "MNS"){
//     mnsCount++;
//    }