var mainForm = document.createElement('form')
mainForm.className='container'

var title = document.createElement('h1')
title.id='title'
title.className='title'
title.innerHTML='WEB DEVELOPER TASK'

var p = document.createElement('p')
p.innerHTML='Calculator Task'
p.className='title'
p.id='description'
mainForm.append(title,p)

var outputLable = document.createElement('input')
outputLable.id='result'
outputLable.className='outputcss'
outputLable.setAttribute('name','outputVar')
outputLable.placeholder='ANS'
outputLable.readOnly=true;

var inputNumber = document.createElement('input')
inputNumber.setAttribute('type','text')
inputNumber.id='input'
inputNumber.setAttribute('name','inputVar')
inputNumber.setAttribute('placeholder','0');
inputNumber.className='inputNum'
inputNumber.addEventListener('keyup',handleEnterkey)

function handleEnterkey(event){
    if(event.key === 'Enter')
    outputLable.value = eval(inputNumber.value)
    if(event.key==='Escape'){
    outputLable.value='';
    inputNumber.value='';
    }
}

var outDiv = document.createElement('div')
outDiv.className='outputmaindiv'
outDiv.append(outputLable,inputNumber)

var keyDiv = document.createElement('div')
keyDiv.className='inputmaindiv'

function btndiv(){
    var ele = document.createElement('div')
    return ele;    
}

function cmnButton(idValue,nameValue,classValue,content){
    var  ele = document.createElement('button')
    ele.setAttribute('type','button');
    ele.setAttribute('id',idValue);
    ele.setAttribute('name',nameValue);
    ele.setAttribute('class',classValue);
    ele.innerHTML=content;
    return ele;
}

function updatevalue(value){
    inputNumber.value+=value;
}

var clearBtn = cmnButton('clear','clearVar','normalbtnCss','c')
clearBtn.addEventListener('click',function(){
    inputNumber.value=''
})
var backBtn = cmnButton('back','backVar','normalbtnCss','<i class="fa fa-long-arrow-left" aria-hidden="true"></i>')
backBtn.addEventListener('click',function(){
    inputNumber.value=inputNumber.value.slice(0, -1)
})
var dotBtn = cmnButton('dot','dotVar','normalbtnCss','.')
dotBtn.addEventListener('click',function(){
    updatevalue('.')
});
var multiBtn = cmnButton('multi','multiVar','charCss','X')
multiBtn.addEventListener('click',function(){
    updatevalue('*')
});
var sevenBtn = cmnButton('7','sevenVar','normalbtnCss','7')
sevenBtn.addEventListener('click',function(){
    updatevalue('7')
});
var eightBtn = cmnButton('8','eightVar','normalbtnCss','8')
eightBtn.addEventListener('click',function(){
    updatevalue('8')
});

var nineBtn = cmnButton('9','nineVar','normalbtnCss','9')
nineBtn.addEventListener('click',function(){
    updatevalue('9')
});

var divisonBtn = cmnButton('division','divisionVar','charCss','/')
divisonBtn.addEventListener('click',function(){
    updatevalue('/')
});

var fourBtn = cmnButton('4','fourVar','normalbtnCss','4')
fourBtn.addEventListener('click',function(){
    updatevalue('4')
});

var fiveBtn = cmnButton('5','fiveVar','normalbtnCss','5')
fiveBtn.addEventListener('click',function(){
    updatevalue('5')
});

var sixBtn = cmnButton('6','sixVar','normalbtnCss','6')
sixBtn.addEventListener('click',function(){
    updatevalue('6')
});

var minusBtn = cmnButton('subtract','minusVar','charCss','-')
minusBtn.addEventListener('click',function(){
    updatevalue('-')
});

var oneBtn = cmnButton('1','oneVar','normalbtnCss','1')
oneBtn.addEventListener('click',function(){
    updatevalue('1')
});

var twoBtn = cmnButton('2','twoVar','normalbtnCss','2')
twoBtn.addEventListener('click',function(){
    updatevalue('2')
});

var threeBtn = cmnButton('3','threeVar','normalbtnCss','3')
threeBtn.addEventListener('click',function(){
    updatevalue('3')
});

var plusBtn = cmnButton('add','plusVar','charCss','+')
plusBtn.addEventListener('click',function(){
    updatevalue('+')
});

var zeroBtn = cmnButton('zero','zeroVar','normalbtnCss','0')
zeroBtn.addEventListener('click',function(){
    updatevalue('0')
});

var doublezeroBtn = cmnButton('double','doubleVar','normalbtnCss','00')
doublezeroBtn.addEventListener('click',function(){
    updatevalue('00')
});

var equaltoBtn = cmnButton('equal','equaltoVar','equaltoCss','=')
equaltoBtn.addEventListener('click',function(){
    outputLable.value = eval(inputNumber.value);
});

var btndiv1 = btndiv();
var btndiv2 = btndiv();
var btndiv3 = btndiv();
var btndiv4 = btndiv();
var btndiv5 = btndiv();

btndiv1.append(clearBtn,backBtn,dotBtn,multiBtn)
btndiv2.append(sevenBtn,eightBtn,nineBtn,divisonBtn)
btndiv3.append(fourBtn,fiveBtn,sixBtn,minusBtn)
btndiv4.append(oneBtn,twoBtn,threeBtn,plusBtn)
btndiv5.append(zeroBtn,doublezeroBtn,equaltoBtn)
keyDiv.append(btndiv1,btndiv2,btndiv3,btndiv4,btndiv5)
    
mainForm.append(outDiv,keyDiv)       
document.body.append(mainForm)
inputNumber.focus();