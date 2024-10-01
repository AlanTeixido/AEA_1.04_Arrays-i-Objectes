// Exercici 1

const estudiant = {
    nom: 'Joan',
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
};

function desestrocturacio() {
    const { nom, edat, notes } = estudiant;
    const result = `${nom} té ${edat} anys i ha tret un ${notes.matematiques} a matemàtiques`;

    const resultElement = document.getElementById("solucion1");

    resultElement.innerHTML = `<p>${result}</p>`;

}


// Exercici 2
const coordenades = [12, 5, 8];

function desestrocturacioarrays() {
    const [x, y, z] = coordenades;
    const result = `Les coordenades són: x = ${x}, y = ${y}, z = ${z}`;

    const resultElement = document.getElementById("solucion2");

    resultElement.innerHTML = `<p>${result}</p>`;   
}
