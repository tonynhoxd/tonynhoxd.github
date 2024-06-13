

//===================================================================================
// TECNOLOGIA =======================================================================
//===================================================================================


// mouse multilazer ------------------------------------------------------------------------

let nome2 = '';
let valor2 = 0;
let quant2 = 0;
let dade2 = 0;
let soma2 = 0;

function it2(){

    var car2 = document.getElementById('car2');
    quant2 = document.getElementById('nu2');
    quant2 = Number(quant2.value);
    
    if(quant2 <= 0){}
    
    else if(quant2 > 0){
    car2.style.display = 'block';
    
    
    valorto = valorto - soma2;
    valor2 = valor2 + 10.00;
    dade2 = dade2 + quant2;
    
    
    
    soma2 = valor2 * dade2;
    nome2 = 'Mouse Multilazer'
    
    
    valorto = valorto + soma2;
    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valorto)
    vlt.innerHTML = numeforma;     
    

    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(soma2)

    
    car2.innerHTML = ` 
    <div class="ui">
    
        <div class="ifo">
            <strong>Item: `+nome2+`</strong>
    
            <strong>`+numeforma+`</strong>
        
            <strong>Unidades: `+dade2+`</strong>
        </div>
      
    
        <p onclick="rev2()">Remover</p>
    </div>`;
    
    
    };
    
    
    valor2 = 0;
    quant2 = 0;
    
}
    
function rev2(){
    valorto = valorto - soma2; 
    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valorto)
    vlt.innerHTML = numeforma; 

    soma2 = 0; 
    dade2 = 0; 
    
    
    car2.style.display = 'none'; 
    if(valorto < 0){
    valorto = 0;
    }
}
   







//  ------------------------------------------------------------------------
