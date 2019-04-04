const crypto = require('crypto');

function md5(str){
    return crypto.createHash('md5').update(str).digest('hex');
}



function getFormatTimeNow(){
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let month=date.getMonth()+1;
    let day=date.getDate()<10?'0'+date.getDate():date.getDate();

    if(month<10)
        month='0'+month;

    if(hour<10)
        hour='0'+hour;

    if(minute<10)
        minute='0'+minute;

    return date.getFullYear()+'-'+month+'-'+day+' '+hour+':'+minute;
}



export {getFormatTimeNow,md5}