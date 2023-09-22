// file content function convert number Date time to String value useable in UI

const OneWeekMs = 604800000;
const OneDayMs = 86400000;
enum FormatDay {long= 0, short};

const DayToString = (day:number, formatterDay: number) => {
    let dayString = " ";
    if(formatterDay === FormatDay.long){
        switch(day){
            case 0:
                dayString = "Dimanche"
                break;
            case 1:
                dayString = "Lundi"
                break;
            case 2:
                dayString = "Mardi"
                break;
            case 3:
                dayString = "Mercredi"
                break;
            case 4:
                dayString = "Jeudi"
                break;
            case 5:
                dayString = "Vendredi"
                break;
            case 6:
                dayString = "Samedi"
                break;
            }        
    }

    else{
        switch(day){
            case 0:
                dayString = "Dim"
                break;
            case 1:
                dayString = "Lun"
                break;
            case 2:
                dayString = "Mar"
                break;
            case 3:
                dayString = "Mer"
                break;
            case 4:
                dayString = "Jeu"
                break;
            case 5:
                dayString = "Ven"
                break;
            case 6:
                dayString = "Sam"
                break;
            }        
    }


    return dayString;
};

const monthToString = (month: number) =>{
    let monthString = " ";
        switch(month){
            case 0:
                monthString = "Jan"
                break;
            case 1:
                monthString = "Fev"
                break;
            case 2:
                monthString = "Mar"
                break;
            case 3:
                monthString = "Avr"
                break;
            case 4:
                monthString = "Mai"
                break;
            case 5:
                monthString = "Juin"
                break;
            case 6:
                monthString = "Juil"
                break;    
            case 7:
                monthString = "Aout"
                break;
            case 8:
                monthString = "Sept"
                break;
            case 9:
                monthString = "Oct"
                break;
            case 10:
                monthString = "Nov"
                break;
            case 11:
                monthString = "Déc"
                break;   
    }
    return monthString;
};

const LastMessageTime = (timeOfLastMsg:number)=>{
    const timeNow = new Date(Date.now()); //save now time 
    const OneWeekAfter = new Date(timeOfLastMsg + OneWeekMs); // save date of after One Week 
    const dateTimeOFLastMsg = new Date(timeOfLastMsg);

    let dataToDisplay = ' ';
    if(timeNow.valueOf() < OneWeekAfter.valueOf()){
        const numberDay : number = parseInt(((Date.now() - timeOfLastMsg)/OneDayMs).toString());
        switch(numberDay){
            case 0:
                dataToDisplay = `${dateTimeOFLastMsg.getHours()}:${dateTimeOFLastMsg.getMinutes()}`;
                break;
            case 1:
                dataToDisplay = "Hier";
                break;   
            default :
                dataToDisplay = `${DayToString(dateTimeOFLastMsg.getDay(),FormatDay.long)}`;
                break;              
        }     
    }

    else{
        dataToDisplay = `${dateTimeOFLastMsg.getDate()} ${monthToString(dateTimeOFLastMsg.getMonth())} ${dateTimeOFLastMsg.getFullYear()}`;  
    }

    return dataToDisplay; 
};

const DescriptionUserTime = (LastOnline: number)=> {
    const timeNow = new Date(Date.now()); //save now time
    const userLastOnlineTime = new Date(LastOnline);
    const OneWeekAfter = new Date(LastOnline + OneWeekMs); // save date of after One Week  
    let dataToDisplay = '';

        if(timeNow.valueOf() < OneWeekAfter.valueOf()){
            const numberDay : number = parseInt(((Date.now() - LastOnline)/OneDayMs).toString());
            switch(numberDay){
                case 0:
                    dataToDisplay = `Aujourd'hui à ${userLastOnlineTime.getHours()}:${userLastOnlineTime.getMinutes()}`;
                    break;
                case 1:
                    dataToDisplay = `hier à ${userLastOnlineTime.getHours()}:${userLastOnlineTime.getMinutes()}`;
                    break;   
                case 2:
                    dataToDisplay = `Avant-hier à ${userLastOnlineTime.getHours()}:${userLastOnlineTime.getMinutes()}`;
                    break;
                default :
                    dataToDisplay = `${DayToString(userLastOnlineTime.getDay(),FormatDay.long)} à ${userLastOnlineTime.getHours()}:${userLastOnlineTime.getMinutes()}`;
                    break;              
            }            
        }

        else{
            dataToDisplay = `${userLastOnlineTime.getDate()} ${monthToString(userLastOnlineTime.getMonth())} ${userLastOnlineTime.getFullYear()} à ${userLastOnlineTime.getHours()}:${userLastOnlineTime.getMinutes()}`;
        }

    return dataToDisplay;
};

export {
    LastMessageTime,
    DescriptionUserTime,
}