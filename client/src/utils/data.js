
const users = [
    {
        "user_id": 1,
        "first_name": "Ana",
        "last_name": "Ramírez",
        "username": "artsyAna",
        "email": "ana.ramirez2@example.com",
        "password": "$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK"
    },
    {
        "user_id": 2,
        "first_name": "Pablo",
        "last_name": "Gómez",
        "username": "painterPablo",
        "email": "pablo.gomez@example.com",
        "password": "$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK"
    },
    {
        "user_id": 3,
        "first_name": "Juan",
        "last_name": "Morales",
        "username": "collabJuan",
        "email": "juan.morales@example.com",
        "password": "$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK"
    },
    {
        "user_id": 4,
        "first_name": "Sofía",
        "last_name": "López",
        "username": "sketchSofi",
        "email": "sofia.lopez@example.com",
        "password": "$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK"
    },
    {
        "user_id": 5,
        "first_name": "Elena",
        "last_name": "Castro",
        "username": "expoElena",
        "email": "elena.castro@example.com",
        "password": "$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK"
    },
    {
        "user_id": 6,
        "first_name": "Marcos",
        "last_name": "Fernández",
        "username": "muralsMark",
        "email": "marcos.fernandez@example.com",
        "password": "$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK"
    },
    {
        "user_id": 7,
        "first_name": "Lucía",
        "last_name": "Torres",
        "username": "artTeacher",
        "email": "lucia.torres@example.com",
        "password": "$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK"
    },
    {
        "user_id": 8,
        "first_name": "José",
        "last_name": "Martínez",
        "username": "drawKid",
        "email": "jose.martinez@example.com",
        "password": "$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK"
    },
    {
        "user_id": 9,
        "first_name": "Gabriela",
        "last_name": "Ríos",
        "username": "galeriaGaby",
        "email": "gabriela.rios@example.com",
        "password": "$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK"
    },
    {
        "user_id": 10,
        "first_name": "Miguel",
        "last_name": "Navarro",
        "username": "tattooMike",
        "email": "miguel.navarro@example.com",
        "password": "$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK"
    }
]


function attachUsernameToPublications(publications, users) {
    const userMap = users.reduce((map, user) => {
        map[user.user_id] = user.username;
        return map;
    }, {});

    return publications.map(publication => ({
        ...publication,
        username: userMap[publication.user_id] || 'Unknown'
    }));
}

export {
    users,
    attachUsernameToPublications
};