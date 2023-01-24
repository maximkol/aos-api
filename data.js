let now = new Date();
const tomorrow = new Date(now)
tomorrow.setDate(tomorrow.getDate() + 1)
const tournaments = [
        {
            id:1,
            title:"Test",
            start: now,
            end: tomorrow,
            isOnline:true,
            peopleNumber:10
        }
    ];

exports.tournaments = tournaments;