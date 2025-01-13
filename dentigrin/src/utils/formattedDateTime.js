export function formattedDate(dateString) {
    const date = new Date(dateString);
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };

    const formattedDate = new Intl.DateTimeFormat('en-CA', optionsDate).format(date);
    return formattedDate;
}

export function formattedTime(dateString) {
    const date = new Date(dateString);
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false };

    const formattedTime = new Intl.DateTimeFormat('en-CA', optionsTime).format(date);
    return formattedTime;
}