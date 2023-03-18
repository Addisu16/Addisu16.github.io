
/**
 * 
 * @param {Array} dailyRec 
 * @param {number} funderId 
 * @returns {Array} Array of object
 */


function funderTotals(dailyRec, funderId) {
    const funderTotalsByDay = {};
    for (const day of dailyRec) {
        const donations = day.donations;
        const date = day.date;
        const funderTotals = {};
        for (const donation of donations) {
            const funderId = donation.funderId;
            const amount = donation.amount;
            if (!funderTotals[funderId]) {
                funderTotals[funderId] = 0;
            }
            funderTotals[funderId] += amount;
        }
        funderTotalsByDay[date] = funderTotals;
    }
    return funderTotalsByDay;
}