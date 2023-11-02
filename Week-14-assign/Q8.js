function calcRemDays(evenDate1) {
    const currentDate = new Date()
    const evenDateTime = new Date(evenDate1)
    const timeDiff = evenDateTime - currentDate;
    const daysRem = Math.ceil(timeDiff / 8.64e+7) 
    /* divide to convert ms to days and ceil to get rounded no. of days until that day */
    return daysRem;
}

const eventDate = '2023-12-30';
console.log(calcRemDays(eventDate));
