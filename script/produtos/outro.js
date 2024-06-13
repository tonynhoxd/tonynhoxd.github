

//===================================================================================
// OUTROS =======================================================================
//===================================================================================



// Bolsa victor hugo ------------------------------------------------------------------------

let nome5 = '';
let valor5 = 0;
let quant5 = 0;
let dade5 = 0;
let soma5 = 0;

function it5(){

var car5 = document.getElementById('car5');
quant5 = document.getElementById('nu5');
quant5 = Number(quant5.value);

if(quant5 <= 0){}

else if(quant5 > 0){
car5.style.display = 'block';


valorto = valorto - soma5;
valor5 = valor5 + 84.83;
dade5 = dade5 + quant5;



soma5 = valor5 * dade5;
nome5 = 'Vaso Atenas'


valorto = valorto + soma5;
numeforma = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
}).format(valorto)
vlt.innerHTML = numeforma;

numeforma = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
}).format(soma5)


car5.innerHTML = ` 
<div class="ui">

    <div class="ifo">
        <strong>Item: `+nome5+`</strong>

        <strong>`+numeforma+`</strong>
    
        <strong>Unidades: `+dade5+`</strong>
    </div>
  

    <p onclick="rev5()">Remover</p>
</div>`;


};


valor5 = 0;
quant5 = 0;

}

function rev5(){
    valorto = valorto - soma5; 
    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valorto)
    vlt.innerHTML = numeforma; 

    soma5 = 0; 
    dade5 = 0; 


    car5.style.display = 'none'; 
    if(valorto < 0){
        valorto = 0;
    }
}


//  ------------------------------------------------------------------------
