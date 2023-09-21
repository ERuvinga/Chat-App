// file content function convert number Date time to String value useable in UI

const OneWeekMs = 604800000;
const DayToString = (day:number) => {
    let dayString = " ";
    switch(day){
        case 0:

            break;
    }

    return dayString;
};
const displayTime = (timeOfLastMsg:Date)=>{
    const timeNow = new Date(Date.now()); //save now time 
    let dataToDisplay = '';

    if(!(timeNow.getDate() - timeOfLastMsg.getDate())){
            dataToDisplay = `${timeOfLastMsg.getHours()}:${timeOfLastMsg.getMinutes()}`;
    }

    else if((timeNow.getDate() - timeOfLastMsg.getDate()) > 0 && (timeNow.getDate() - timeOfLastMsg.getDate()) < 7){
        dataToDisplay = `${timeNow.getDate() - timeOfLastMsg.getDate()}j`;
    }

    else{
        dataToDisplay = `${timeOfLastMsg.toLocaleDateString()}`
    }

    return dataToDisplay; 
};

const DescriptionUserTime = (LastOnline: number)=>{
    const timeNow = new Date(Date.now()); //save now time
    const userLastOnlineTime = new Date(LastOnline);
    const OneWeekAfter = new Date(LastOnline + OneWeekMs); // save date of after One Week  
    let dataToDisplay = '';
    console.log(userLastOnlineTime.getDay())
    if(timeNow.getMonth() === OneWeekAfter.getMonth()){
        const numberDay = timeNow.getDay() - userLastOnlineTime.getDay();
        switch(numberDay){
            case 0:
                dataToDisplay = `Aujourd'hui ${userLastOnlineTime.getHours()}:${userLastOnlineTime.getMinutes()}`;
                break;
            case 1:
                dataToDisplay = `hier ${userLastOnlineTime.getHours()}:${userLastOnlineTime.getMinutes()}`;
                break;   
            case 2:
                dataToDisplay = `Avant-hier ${userLastOnlineTime.getHours()}:${userLastOnlineTime.getMinutes()}`;
                break;
            case 3:
                dataToDisplay = ` ${userLastOnlineTime.getHours()}:${userLastOnlineTime.getMinutes()}`;
                break;             
        }
    }

    return dataToDisplay;

};

export {
    displayTime,
    DescriptionUserTime,
}