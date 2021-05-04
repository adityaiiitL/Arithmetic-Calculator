const calculator=document.querySelector('#calculator');
calculator.addEventListener('submit',function(e){

    e.preventDefault();
})
const n1=document.querySelector('#num1');
const n2=document.querySelector('#num2');
const btn=document.querySelectorAll('button');
const area=document.querySelector('#output');

n1.addEventListener('input',function(){

    area.innerText=`${n1.value} ${op} ${n2.value}`;
})

let op='';

for(let i=0;i<btn.length-1;i++){

    btn[i].addEventListener('click',function(){

        calculate(i);
        area.innerText=`${n1.value} ${op} ${n2.value}`;
    })
}


function calculate(btnValue){

    if(btnValue===0){
        op='+';        
    }
    if(btnValue===1){
        op='-';        
    }
    if(btnValue===2){
        op='x';        
    }
    if(btnValue===3){
        op='/';        
    }
    if(btnValue===4){
        op='%';        
    }
}

n2.addEventListener('input',function(){

    area.innerText=`${n1.value} ${op} ${n2.value}`;
})

btn[5].addEventListener('click',function(){

    let value1=parseInt(n1.value);
    let value2=parseInt(n2.value);
    if(op==='+'){
        
        let value=value1+value2;
        if(!value&&value!=0){
            alert('Enter Valid Numbers');
        }
        else{
            area.innerText=`${value1+value2}`;
            n1.value=value;
            n2.value='';
        }
    }
    if(op==='-'){
        
        let value=value1-value2;
        if(!value&&value!=0){
            alert('Enter Valid Numbers');
        }
        else{
            area.innerText=`${value1-value2}`;
            n1.value=value;
            n2.value='';
        }
    }
    if(op==='x'){
        
        let value=value1*value2;
        if(!value&&value!=0){
            alert('Enter Valid Numbers');
        }
        else{
            area.innerText=`${value1*value2}`;
            n1.value=value;
            n2.value='';
        }
    }
    if(op==='/'){
        
        let value=value1/value2;
        if(!value&&value!=0){
            alert('Enter Valid Numbers');
        }
        else{
            area.innerText=`${value1/value2}`;
            n1.value=value;
            n2.value='';
        }
    }
    if(op==='%'){
        
        let value=value1%value2;
        if(!value&&value!=0){
            alert('Enter Valid Numbers');
        }
        else{
            area.innerText=`${value1%value2}`;
            n1.value=value;
            n2.value='';
        }
    }

})
const reset=document.querySelector('.reset');
reset.addEventListener('click',function(){

    n1.value='';
    n2.value='';
    op='';
    area.innerText='Calculations...';
})
