

// 1 Gigasecond = 1 000 000 000 (secs)
// Jan 24th. 2015 at 22:00 => Oct 2nd, 2046 at23:46:40
const gigasecond = (date) => {
    return new Date(date.getTime() + 1e12);
};


console.log(gigasecond(new Date('2015-01-24T22:00:00')));
