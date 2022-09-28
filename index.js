class Zene {
    #zeneszam
    #zenehosz
    static lista = [];

    constructor(zeneszam,zenehosz) {
        this.zeneszam = zeneszam
        this.zenehosz = zenehosz
    }

   static osszegzes() {
        let sum = 0;
        this.lista.forEach(e => {
            console.log(e.zenehosz)
           sum += parseInt(e.zenehosz)
        });
        return sum;
    }

}
const Gomb = document.getElementById("felvesz")


Gomb.addEventListener('click', () => {
    let szam =  document.getElementById("szam").value
    let hossz=  document.getElementById("hossz").value
    if(szam != "" && hossz != "") {
        Zene.lista.push(new Zene(szam,hossz))
        document.getElementById("szam").value = ""
        document.getElementById("hossz").value = ""
        document.getElementById("out").textContent = "Zenehossz összesítve: " + Zene.osszegzes();
    } else {
        document.getElementById("out").textContent = "Mind2 mezőt kötelező megadni"
    }
    
})