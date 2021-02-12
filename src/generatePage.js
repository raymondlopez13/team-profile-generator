const generateCards = employeeArr => {
    const cards = employeeArr.map(data => {
        return `
        <div class="card col-md-4 pr-0">
            <div class="card-body bg-primary text-white text-center">
                <h4 class="card-title">${data.name}</h4>
                <h5 class="card-title">${checkIcon(data.role)}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${data.id}</li>
                <li class="list-group-item">Email: ${data.email}</li>
                <li class="list-group-item">${getOtherAttribute(data)}</li>
            </ul>
        </div>
        `
    });
    return cards.join('');
};

const checkIcon = role => {
    if(role === 'Manager') {
        return '<i class="fas fa-coffee"></i> Manager';
    } else if (role === 'Engineer') {
        return '<i class="fas fa-glasses"></i> Engineer';
    } else if (role === 'Intern') {
        return '<i class="fas fa-school"></i> Intern';
    }
};

const getOtherAttribute = data => {
    if (data.officeNumber) {
        return `Office Number: ${data.officeNumber}`
    } else if (data.github) {
        return `Github: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a>`;
    } else if (data.school) {
        return `School: ${data.school}`;
    }
}

const generatePage = employeeArr => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>

    <body>
        <header class="bg-danger text-white">
            <h3 class="p-5 text-center">My Team</h3>
        </header>
        <main class="row">
            ${generateCards(employeeArr)}
        </main>
    </body>
    `
};


module.exports = generatePage;