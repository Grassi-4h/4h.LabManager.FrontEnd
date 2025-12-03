function ripristinaStatoIniziale() {
    const contenutoCentrale = document.getElementById('contenutoCentrale');
    const titoloContenuto = '<b>Sistema gestionale</b>';

    contenutoCentrale.classList.remove(
        'bg-white', 
        'text-black', 
        'shadow-xl'
    );

    contenutoCentrale.classList.add(
        'bg-white/10', 
        'backdrop-blur-xs', 
        'border', 
        'border-white/40', 
        'shadow-[0_8px_20px_0_rgba(0,0,0,0.65)]'
    );

    contenutoCentrale.innerHTML = titoloContenuto;
}

function selectFirstOption() {

    const bottoneOpzione1 = document.getElementById('btnOpzione1');
    const contenutoCentrale = document.getElementById('contenutoCentrale');
    const opzioni = document.getElementById('opzioniBTN')

        bottoneOpzione1.onclick = function() {

            contenutoCentrale.classList.remove(

                'bg-white/10', 
                'backdrop-blur-xs', 
                'border', 
                'border-white/40', 
                'shadow-[0_8px_20px_0_rgba(0,0,0,0.65)]'

            );

            contenutoCentrale.classList.add(

                'bg-white', 
                'text-black', 
                'shadow-xl'

            ); 

            contenutoCentrale.innerHTML = '';
        }

        opzioni.onclick = ripristinaStatoIniziale;

        opzioni.style.cursor = 'pointer';

}

document.addEventListener('DOMContentLoaded', selectFirstOption);