fetch('menu.json')
//que hace esta linea? esta linea indica la carga del archivo menu.json fetch es una funcion de javascript que facilita la realizacion de solicitudes de red como tener datos de un archivo o un endpoint de API.
//como funciona? fetch devuelve una promesa que cuandose resuelve ,te da acesso a la respuesta de la solicitud. Esta rsepuesta no es directamente los datos en formato JSON,si no un objeto de respuesta que incluye varios detalles sobre la respuesta misma.  

.then(response => response.json())
//que hace? esta linea toma el iobejtop de respuesta obrtenido del fetch y utiliza el metodo.json() para convertir el cuerpo de la respuesta en un objeto Javascrpt (esto asume el cuerpo de la respuesta esta en formulario JSON).
.then(data =>{
    // que hace? aqui se procesan los datos JSON ya convertidos.Se obtiene una referencia el contenedor del menu en el HTML mediante getElementId  ('menu-container').
    const menuContainer =document.getElementById('menu-container');
data.item.array.forEach(category => {
    const categoryTitle= document.createElement('h2');
    categoryTitle.textContent= category.category;
    menuContainer.appendChild(categoryTitle);

    const table= document.createElement('table');
    //Que hace? se crea un elemento table para cada categoria. Ademas, se prepara el encabezado (tablehead) con las columnas pertinentes. tableBody se inicializa vacio y se llenara con los elementos de la categoria.
     const tablehead= <tr><th>Foto</th><th>Descripcion</th><th>Descripcion</th><th>Precio</th></tr>;
     let tableBody="";
    //como funciona? para cada cateoria en los datos, se realizan varios pasos:
    //Crear un titulo para ka categoria: s cerea un elemento <h2> para el tiulo de la categoria, se esabalece su contenido de texto el nombre de la categoria(category.category), y luego se agrega el cobntenedor del menu.
    //Crear una tabla para los elementos de esa categoria: se genera una tabla por cada categoria. Primero se define el encabezado de la tabla (<th>foto</th><th>Precio</th>).
    
    category.items.forEach( item => {
        tableBody += `<tr>
            <td><img src="${item.image}" alt="{item.name}"></img></td>
            <td>${item.name} - ${item.description}</td>
            <td>${item.price}</td>
        </tr>`
    });
    //que hace? por cada item dentro de category.items, se concatena ua nueva fila (<tr>) a TableBody. Esta fila contiene una celda para la imagen del elemento (usando el atribuo scr para la URL de la iamgen y alt apar el texto alternativo), otra celda para el nombre y la descripcion del elemento, y una tercera celda para el precio del elemento.
    table.innerHTML= tableHead + tableBody;
    // que hace? una vez completados todas las filas de latabla para os elemnetos de una categoria, se cambina el emcabezado, de la tabla  tableboard en el cuerpo de la tabla (tableboard)
    menuContainer.appendChild(table);
});
});
//Poblar la tabla con los elementos: Para cada items dentro de una categoria, se crea una fila (<tr></tr>) con trs celdas (<td></td>): una para la imagen (con un elemento <img>), otra para el nombre y descripcion del item, y una ultima para el precio.Este se hace concamente la nueva fila a una variable tableBody.
//Finalizar y mostrar la tabla: Una vez que todas las filas han sido agregadas a tableBody, se establece el contenido interno (innerHTML) de a tabla combinando el ecabezado con el cuerpo, luego, esta tabla esta completa se agrega el contenedor del menu en el documento.
