
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {

    formulario.addEventListener('submit', buscarClima);

})

function buscarClima(e){
    e.preventDefault();
    
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if( ciudad === '' || pais === ''){
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    // Consultar la API 
    consultarAPI(ciudad, pais);


}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
        // crear una alerta
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold"> Error! </strong>
            <span class="block"> ${mensaje} </span>
        `;

        container.appendChild(alerta)

        // eliminar la alerta despues de 5 seg
        setTimeout( () => {
            alerta.remove()
        }, 5000)
    }   
}

function consultarAPI(ciudad, pais){

    const appId = '4a67d7bd35db888ed53f204021fcf1a8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    spinner() //muestra un spinner de carga

    fetch(url)
        .then(respuesta => respuesta.json())
        .then( datos => {
            limpiarHTML() // limpiar el html previo
            console.log(datos)
            if(datos.cod === "404"){
                mostrarError('Ciudad no encontrada')
            }

            // Imprime la respuesta en el html
            mostrarClima(datos);
        })
}

function mostrarClima(datos){
    const { name, main:{ temp, temp_max, temp_min} } = datos;

    const centigrados = kelvinCentigrados(temp);
    const max = kelvinCentigrados(temp_max);
    const min = kelvinCentigrados(temp_min);

    const nombreCiudad = document.createElement('p')
    nombreCiudad.textContent = `${name}`;
    nombreCiudad.classList.add('font-bold', 'text-3xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('p');
    tempMax.innerHTML = `Maxima: ${max} &#8451;`;
    tempMax.classList.add('text-xl');

    const tempMin = document.createElement('p');
    tempMin.innerHTML = `Minima: ${min} &#8451;`;
    tempMin.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad)
    resultadoDiv.appendChild(actual)
    resultadoDiv.appendChild(tempMax)
    resultadoDiv.appendChild(tempMin)

    resultado.appendChild(resultadoDiv)
    
}

const kelvinCentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function spinner(){
    limpiarHTML();
    
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-chase')

    divSpinner.innerHTML = `
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    `;
    resultado.appendChild(divSpinner);
}
    