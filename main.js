let date=new Date()
let month=["January","February","March","April","May",'June',"July","August","September","October","November","December"];
let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let hour=date.getHours()-12;
if(hour<10){
    hour=`0${hour}`
}
let minute=date.getMinutes();
if(minute<10){
    minute=`0${minute}`
}
const moment=()=>{
    return {
        format:function(param){
            if(param==="LT"){
                if(date.getHours()<=12) console.log(`${hour}:${minute} AM`);
                else console.log(`${hour}:${minute} PM`);
            }else if(param==="LTS"){
                if(date.getHours()<=12) console.log(`${hour}:${minute}:${date.getSeconds()} AM`);
                else console.log(`${hour}:${minute}:${date.getSeconds()} PM`);
            }else if(param==="L"||param==="l"){
                console.log(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
            }else if(param==="LL"||param==="ll"){
                if(param==="LL")console.log(`${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`);
                else if(param==="ll")console.log(`${month[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}`);
            }else if(param==="LLL"||param==="lll"){
                if(param==="LLL"&&date.getHours()<=12)console.log(`${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${hour}:${minute} AM `);
                else if(param==="lll"&&date.getHours()<=12)console.log(`${month[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}  ${hour}:${minute} AM `);
                else{
                    console.log(`${month[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}  ${hour}:${minute} PM `);
                }
            }else if(param==="LLLL"||param==="llll"){
                if(param==="LLLL"&&date.getHours()<=12)console.log(`${week[date.getDay()]} ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${hour}:${minute} AM `);
                else if(param==="llll"&&date.getHours()<=12)console.log(`${week[date.getDay()].slice(0,3)} ${month[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}  ${hour}:${minute} AM `);
                else{
                    console.log(`${week[date.getDay()].slice(0,3)} ${month[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}  ${hour}:${minute} PM `);
                }
            }


        }
    }
}
moment().format("llll");
/////
let lang = navigator.language || navigator.userLanguage;
moment.__proto__.locale=()=>{
    console.log(lang);
}
moment.locale();