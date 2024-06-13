

//===================================================================================
// BRinQUEDOS =======================================================================
//===================================================================================



// venom lego ------------------------------------------------------------------------
    
let nome3 = '';
let valor3 = 0;
let quant3 = 0;
let dade3 = 0;
let soma3 = 0;

function it3(){

    var car3 = document.getElementById('car3');
    quant3 = document.getElementById('nu3');
    quant3 = Number(quant3.value);
    
    if(quant3 <= 0){}
    
    else if(quant3 > 0){
    car3.style.display = 'block';
    
    
    valorto = valorto - soma3;
    valor3 = valor3 + 259.99;
    dade3 = dade3 + quant3;
    
    
    
    soma3 = valor3 * dade3;
    nome3 = 'Venom Lego'
    
    
    valorto = valorto + soma3;
    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valorto)
    vlt.innerHTML = numeforma;     
    

    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(soma3)

    
    car3.innerHTML = ` 
    <div class="ui">
    
        <div class="ifo">
            <strong>Item: `+nome3+`</strong>
    
            <strong>`+numeforma+`</strong>
        
            <strong>Unidades: `+dade3+`</strong>
        </div>
      
    
        <p onclick="rev3()">Remover</p>
    </div>`;
    
    
    };
    
    
    valor3 = 0;
    quant3 = 0;
    


}
    
function rev3(){
    valorto = valorto - soma3; 
    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valorto)
    vlt.innerHTML = numeforma;     
    soma3 = 0; 
    dade3 = 0; 
    
    
    car3.style.display = 'none'; 
    if(valorto < 0){
    valorto = 0;
    }
}








//  ------------------------------------------------------------------------

 