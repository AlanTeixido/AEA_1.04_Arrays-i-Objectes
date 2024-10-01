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
    document.getElementById("solucion1").textContent = `${nom} té ${edat} anys i ha tret un ${notes.matematiques} a matemàtiques`;



}

// Exercici 2
const coordenades = [12, 5, 8];

function desestrocturacioarrays() {
    const [x, y, z] = coordenades;
    document.getElementById("solucion2").textContent = `Les coordenades són: x = ${x}, y = ${y}, z = ${z}`;

  
}

//Exercici 3
const preus = [100, 200, 300, 400];

function metodemap(){
    const preusIVA = preus.map(preu => preu * 1.21);
    document.getElementById("solucion3").textContent = `Els preus amb IVA són: ${preusIVA}`;


}

//Exercici 4
const edats = [16, 21, 18, 24, 12, 30, 40];


function metodofilter(){
    const majorsEdat = edats.filter(edat => edat >= 18 && edat <= 30);
    document.getElementById("solucion4").textContent = `Les persones majors d'edat són: ${majorsEdat}`;

}

//Exercici 5
const notes = [7, 9, 5, 10, 8];

function metodoreduce(){
    const notaMitjana = notes.reduce((acc, nota) => acc + nota) / notes.length;
    document.getElementById("solucion5").textContent = `La nota mitjana és: ${notaMitjana}`;

}

//Exercici 6
const producte = {
    nom: "Portàtil",
    preu: 950,
    quantitat: 3
};

function crearobjecteproducte(){
    document.getElementById("solucion6").textContent = `El producte és: ${producte.nom}, el preu és: ${producte.preu} i la quantitat és: ${producte.quantitat}`;
    
}