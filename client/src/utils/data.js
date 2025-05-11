const publications = [
    {
        "publication_id": 1,
        "created_at": "2025-04-29T10:54:02.000Z",
        "title": "Evento 1",
        "text": "Primer evento importante",
        "category": "event",
        "user_id": 1
    },
    {
        "publication_id": 2,
        "created_at": "2025-04-29T10:54:02.000Z",
        "title": "Post 1",
        "text": "Descripción del post uno",
        "category": "post",
        "user_id": 2
    },
    {
        "publication_id": 3,
        "created_at": "2025-04-29T10:54:02.000Z",
        "title": "Evento 2",
        "text": "Segundo evento genial",
        "category": "event",
        "user_id": 3
    },
    {
        "publication_id": 4,
        "created_at": "2025-04-29T10:54:02.000Z",
        "title": "Post 2",
        "text": "Contenido interesante",
        "category": "post",
        "user_id": 4
    },
    {
        "publication_id": 5,
        "created_at": "2025-04-29T10:54:02.000Z",
        "title": "Evento 3",
        "text": "Otro evento más",
        "category": "event",
        "user_id": 5
    },
    {
        "publication_id": 6,
        "created_at": "2025-04-29T10:54:02.000Z",
        "title": "Post 3",
        "text": "Un post más",
        "category": "post",
        "user_id": 6
    },
    {
        "publication_id": 7,
        "created_at": "2025-04-29T10:54:02.000Z",
        "title": "Evento 4",
        "text": "Evento destacado",
        "category": "event",
        "user_id": 7
    },
    {
        "publication_id": 8,
        "created_at": "2025-04-29T10:54:02.000Z",
        "title": "Post 4",
        "text": "Contenido visual impactante",
        "category": "post",
        "user_id": 8
    },
    {
        "publication_id": 9,
        "created_at": "2025-04-29T10:54:02.000Z",
        "title": "Evento 5",
        "text": "Evento especial",
        "category": "event",
        "user_id": 9
    },
    {
        "publication_id": 10,
        "created_at": "2025-04-29T10:54:02.000Z",
        "title": "Post 5",
        "text": "Otro post con imagen",
        "category": "post",
        "user_id": 10
    }
] 

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

const events = [
    {
        publication_id: 1,
        date_time: "2025-05-01T18:00:00"
    },
    {
        publication_id: 3,
        date_time: "2025-05-03T20:00:00"
    },
    {
        publication_id: 5,
        date_time: "2025-05-05T17:30:00"
    },
    {
        publication_id: 7,
        date_time: "2025-05-08T19:00:00"
    },
    {
        publication_id: 9,
        date_time: "2025-05-10T16:00:00"
    }
];


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
    publications,
    users,
    events,
    attachUsernameToPublications
};