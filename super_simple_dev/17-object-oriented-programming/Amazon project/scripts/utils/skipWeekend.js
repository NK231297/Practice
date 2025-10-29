import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

export function skipWeekend(date){
    
    const dayString = dayjs(date).format('dddd');

    const skipWeekend = dayString === 'Saturday' ? date.add(2, 'days') :
                        dayString === 'Sunday' ? date.add(1, 'days') :
                        date;

    return skipWeekend;
    
};