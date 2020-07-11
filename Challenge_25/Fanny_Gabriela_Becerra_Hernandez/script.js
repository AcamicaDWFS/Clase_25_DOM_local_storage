(function addUser() {
    class User {
        constructor(name, lastname, mail, user, password, active) {
            this.name = name;
            this.lastname = lastname;
            this.mail = mail;
            this.user = user;
            this.password = password;
            this.active = active;
        }
    };

    let variableNames = ['name', 'lastname', 'mail', 'user', 'password'],
        variablePropmt = ['nombre', 'apellido', 'email', 'nickname', 'password'],
        users = [],
        newUser = new User(),
        addUser = false,
        i = 0,
        getLocalStorage,
        pepe = new User('Pepe', 'Pérez', 'pepe@gmail.com', 'champion_123', 'ElMejor$12', true),
        juan = new User('Juan', 'Hernández', 'juhe@gmail.com', 'player24', 'Fubol74', false),
        fiora = new User('Fiora', 'Fernández', 'fife@gmail.com', 'estrellita_56', 'GatitosDeAzucar:3', true),
        mafalda = new User('Mafalda', 'González', 'mago@gmail.com', 'anon', 'cuentos_de_terror', true),
        salvador = new User('Salvador', 'Rodriguez', 'saro@gmail.com', 'chava', 'C0nTr4$3Na', true),
        gaviota = new User('Gaviota', 'Tellez', 'gate@gmail.com', 'rager', 'niñoRata', false);

    users.push(pepe);
    users.push(juan);
    users.push(fiora);
    users.push(mafalda);
    users.push(salvador);
    users.push(gaviota);

    localStorage.setItem('pepe', pepe);
    getLocalStorage = JSON.parse(localStorage.getItem('pepe'));
    console.log('getLocalStorage: ', getLocalStorage);

    for (i; i < variablePropmt.length; i++) {
        newUser[variableNames[i]] = prompt(`Ingrese un nuevo ${variablePropmt[i]} de usuario`);
    }
    addUser = users.some(param => param.user === newUser.user);

    try {
        if (!newUser) {
            throw new Error("Información incompleta, no se ingresó un username");
        } else if (addUser) {
            throw new Error("Usuario ya existente");
        }
        newUser.active = true;
        users.push(newUser);
        document.write(`<p>¡Bienvenido ${newUser.name}!</p>`);
    } catch (error) {
        alert(error);
    }
})();