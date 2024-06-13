


//===================================================================================
// ESPORTES =======================================================================
//===================================================================================



// bola mikasa ------------------------------------------------------------------------

let nome4 = '';
let valor4 = 0;
let quant4 = 0;
let dade4 = 0;
let soma4 = 0;

function it4(){

        var car4 = document.getElementById('car4');
        quant4 = document.getElementById('nu4');
        quant4 = Number(quant4.value);
        
        if(quant4 <= 0){}
        
        else if(quant4 > 0){
        car4.style.display = 'block';
        
        
        valorto = valorto - soma4;
        valor4 = valor4 + 59.99;
        dade4 = dade4 + quant4;
        
        
        
        soma4 = valor4 * dade4;
        nome4 = 'Bola Mikasa'
        
        
        valorto = valorto + soma4;
        numeforma = Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
        }).format(valorto)
        vlt.innerHTML = numeforma; 
        
        
        numeforma = Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
        }).format(soma4)

        

        
        car4.innerHTML = ` 
        <div class="ui">
        
            <div class="ifo">
                <strong>Item: `+nome4+`</strong>
        
                <strong>`+numeforma+`</strong>
            
                <strong>Unidades: `+dade4+`</strong>
            </div>
          
        
            <p onclick="rev4()">Remover</p>
        </div>`;
        
        
        };
        
        
        valor4 = 0;
        quant4 = 0;
        
}
        
function rev4(){
    valorto = valorto - soma4; 
    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valorto)
    vlt.innerHTML = numeforma; 
        
    soma4 = 0; 
    dade4 = 0; 
        
        
    car4.style.display = 'none'; 
    if(valorto < 0){
    valorto = 0;
    }
}
   





//  ------------------------------------------------------------------------
