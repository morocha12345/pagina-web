const preguntas = [
    { pregunta: "¿Cuál es el símbolo químico del agua?", respuesta: "H2O" },
    { pregunta: "¿Cuál es el elemento más abundante en el universo?", respuesta: "Hidrógeno" },
    { pregunta: "¿Cuántos elementos hay en la tabla periódica?", respuesta: "118" },
    { pregunta: "¿Cuál es el símbolo del elemento oro?", respuesta: "Au" },
    { pregunta: "¿Qué elemento es el principal componente del diamante?", respuesta: "Carbono" },
    { pregunta: "¿Cuál es el gas noble más ligero?", respuesta: "Helio" },
    { pregunta: "¿Cuál es el símbolo del elemento sodio?", respuesta: "Na" },
    { pregunta: "¿Cómo se llama el proceso por el cual las plantas producen su propio alimento?", respuesta: "Fotosíntesis" },
    { pregunta: "¿Cuál es el símbolo del elemento hierro?", respuesta: "Fe" },
    { pregunta: "¿Cuál es el pH del agua pura?", respuesta: "7" },
    { pregunta: "¿Qué gas es esencial para la respiración humana?", respuesta: "Oxígeno" },
    { pregunta: "¿Cuál es el elemento más pesado que se encuentra naturalmente?", respuesta: "Uranio" },
    { pregunta: "¿Cuál es el símbolo del elemento plata?", respuesta: "Ag" },
    { pregunta: "¿Qué tipo de enlace une los átomos en una molécula de agua?", respuesta: "Covalente" },
    { pregunta: "¿Cuál es el principal gas de efecto invernadero?", respuesta: "Dióxido de carbono" },
    { pregunta: "¿Cuál es el nombre del compuesto químico NaCl?", respuesta: "Sal común" },
    { pregunta: "¿Cuál es el primer elemento de la tabla periódica?", respuesta: "Hidrógeno" },
    { pregunta: "¿Qué partícula subatómica tiene carga negativa?", respuesta: "Electrón" },
    { pregunta: "¿Qué tipo de reacción química libera energía?", respuesta: "Exotérmica" },
    { pregunta: "¿Cuál es el gas más abundante en la atmósfera terrestre?", respuesta: "Nitrógeno" },
    { pregunta: "¿Cuál es la fórmula química del dióxido de carbono?", respuesta: "CO2"},
    { pregunta: "¿Qué elemento químico tiene como símbolo 'O'?", respuesta: "Oxígeno" },
    { pregunta: "¿Cuál es el metal más ligero?", respuesta: "Litio" },
    { pregunta: "¿Cuál es el símbolo del elemento potasio?", respuesta: "K" },
    { pregunta: "¿Qué elemento tiene el número atómico 8?", respuesta: "Oxígeno" },
    { pregunta: "¿Qué compuesto se utiliza comúnmente para blanquear ropa?", respuesta: "Cloro" },
    { pregunta: "¿Cuál es la sustancia que se encuentra comúnmente en las pilas alcalinas?", respuesta: "Hidróxido de potasio" },
    { pregunta: "¿Qué elemento es líquido a temperatura ambiente?", respuesta: "Mercurio" },
    { pregunta: "¿Qué compuesto tiene la fórmula química HCl?", respuesta: "Ácido clorhídrico" },
    { pregunta: "¿Cuál es la fórmula del ácido sulfúrico?", respuesta: "H2SO4" },
    { pregunta: "¿Cuál es el metal más abundante en la corteza terrestre?", respuesta: "Aluminio" },
    { pregunta: "¿Qué gas se produce durante la fotosíntesis?", respuesta: "Oxígeno" },
    { pregunta: "¿Cuál es el símbolo del elemento calcio?", respuesta: "Ca" },
    { pregunta: "¿Qué elemento se encuentra en todas las moléculas orgánicas?", respuesta: "Carbono" },
    { pregunta: "¿Cuál es el símbolo del elemento zinc?", respuesta: "Zn" },
    { pregunta: "¿Qué elemento se utiliza en la fabricación de vidrio?", respuesta: "Silicio" },
    { pregunta: "¿Cuál es el símbolo del elemento plomo?", respuesta: "Pb" },
    { pregunta: "¿Qué compuesto tiene la fórmula CH4?", respuesta: "Metano" },
    { pregunta: "¿Cuál es el nombre del fosfato usado comúnmente como fertilizante?", respuesta: "Superfosfato" },
    { pregunta: "¿Cuál es el símbolo del elemento titanio?", respuesta: "Ti" },
    { pregunta: "¿Qué elemento tiene el símbolo 'Sn'?", respuesta: "Estaño" },
    { pregunta: "¿Qué elemento es conocido como 'el metal rojo'?", respuesta: "Cobre" },
    { pregunta: "¿Cuál es el símbolo del elemento bario?", respuesta: "Ba" },
    { pregunta: "¿Qué sustancia química se utiliza a menudo como desinfectante y blanqueador?", respuesta: "Hipoclorito de sodio" },
    { pregunta: "¿Cuál es el símbolo del elemento níquel?", respuesta: "Ni" },
    { pregunta: "¿Qué elemento químico tiene el símbolo 'Hg'?", respuesta: "Mercurio" },
    { pregunta: "¿Cuál es el símbolo del elemento manganeso?", respuesta: "Mn" },
    { pregunta: "¿Qué compuesto químico se utiliza en los fertilizantes y tiene la fórmula NH3?", respuesta: "Amoniaco" },
    { pregunta: "¿Quién es considerado el padre de la química moderna?", respuesta: "Lavoisier" },
    { pregunta: "¿Cuál es el símbolo del elemento yodo?", respuesta: "I" },
    { pregunta: "¿Qué gas se desprende durante la reacción del ácido clorhídrico con zinc?", respuesta: "Hidrógeno" },
    // Añade más preguntas siguiendo un patrón similar
];

let preguntaActual;
let intentosRestantes = 5;
let tiempoRestante = 25; // 25 segundos para responder
let timer;

function seleccionarPregunta() {
    preguntaActual = preguntas[Math.floor(Math.random() * preguntas.length)];
    document.getElementById('question').innerText = preguntaActual.pregunta;
    intentosRestantes = 5; // Reinicia los intentos
    tiempoRestante = 25; // Reinicia el tiempo
    document.getElementById('attempts').innerText = `Intentos restantes: ${intentosRestantes}`;
    document.getElementById('timer').innerText = `Tiempo restante: ${tiempoRestante} segundos`;

    clearInterval(timer); // Limpiamos el temporizador previo si existía
    timer = setInterval(() => {
        tiempoRestante--;
        document.getElementById('timer').innerText = `Tiempo restante: ${tiempoRestante} segundos`;
        if (tiempoRestante <= 0) {
            clearInterval(timer);
            mostrarRespuestaCorrecta();
            setTimeout(seleccionarPregunta, 2000);
        }
    }, 1000);
}

function mostrarRespuestaCorrecta() {
    const mensaje = document.getElementById('message');
    mensaje.innerText = `Tiempo agotado. La respuesta correcta es ${preguntaActual.respuesta}.`;
    mensaje.style.color = "red";
    setTimeout(() => mensaje.innerText = '', 2000);
}

function checkAnswer() {
    const respuesta = document.getElementById('answer').value.trim().toLowerCase();
    const mensaje = document.getElementById('message');
    const respuestaCorrecta = preguntaActual.respuesta.toLowerCase();

    if (respuesta === respuestaCorrecta) {
        clearInterval(timer);
        mensaje.innerText = "¡Correcto!";
        mensaje.style.color = "green";
        setTimeout(() => {
            mensaje.innerText = "";
            seleccionarPregunta();
        }, 2000); 
    } else {
        intentosRestantes--;
        if (intentosRestantes > 0) {
            mensaje.innerText = `Incorrecto. Te quedan ${intentosRestantes} intentos.`;
            mensaje.style.color = "red";
        } else {
            clearInterval(timer);
            mensaje.innerText = `Incorrecto. La respuesta correcta es ${preguntaActual.respuesta}.`;
            mensaje.style.color = "red";
            setTimeout(() => {
                mensaje.innerText = "";
                seleccionarPregunta();
            }, 2000); 
        }
    }

    document.getElementById('attempts').innerText = `Intentos restantes: ${intentosRestantes}`;
    document.getElementById('answer').value = '';
}

document.addEventListener('DOMContentLoaded', (event) => {
    seleccionarPregunta();
    document.getElementById('submit').addEventListener('click', checkAnswer);
});
