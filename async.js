console.log("Inicia ");

function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos la llamada al server, la cual lleva un tiempo.

      if (email !== "john@email.com" || password !== "1234") {
        reject(new Error("Email o contraseña incorrectos"));
      }

      let usuario = {
        username: email,
        password,
        token: "3sT0e5Secr370",
      };
      console.info("Obtengo info del usuario");
      resolve(usuario);
    }, 1500);
  });
}

function obtenerposts(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token !== "3sT0e5Secr370") {
        reject(new Error("Este usuario no tienen posts"));
      }

      let posts = [
        {
          title: "Título 1",
          body: "Esto es el cuerpo de primer post",
        },
        {
          title: "Título 2",
          body: "Esto es el cuerpo de segundo post",
        },
      ];

      resolve(posts);
    }, 2500);
  });
}

// login("john@email.com", "1234")
//   .then(usuario => {
//     console.table(usuario)
//     return obtenerposts(usuario.token)
//   })
//   .then(posts=>console.table(posts))
//   .catch((err) => {
//     console.error(err);
//   });

// **************************************************
// **LO MISMO QUE ARRIBA, PERO SIN .then() .catch()**
// **************************************************
async function mostrarPosts() {                         // Declaro una función asíncrona para que se entienda que en algún momento hay que ESPERAR algo.
  let usuario = await login("john@email.com", "1234");  // Espero que se resuelva la promesa de login() y guardo el resultado en usuario.
  console.table(usuario);                               // Utilizo la variable usuario normalmente
  let posts = await obtenerposts(usuario.token);        // Espero que se resuelva la promesa de obtenerPosts() y guardo el resultado en posts.
  console.table(posts);                                 // Utilizo la variable posts normalmente
}
mostrarPosts();   //Llamo a la funcion mostrarPosts()

console.log("Termina async.js");
console.log("------------------------------------------------");
