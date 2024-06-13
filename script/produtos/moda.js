

//===================================================================================
// MODA =======================================================================
//===================================================================================



// Bolsa victor hugo ------------------------------------------------------------------------

let nome1 = '';
let valor1 = 0;
let quant1 = 0;
let dade1 = 0;
let soma1 = 0;

function it1(){

var car1 = document.getElementById('car1');
quant1 = document.getElementById('nu1');
quant1 = Number(quant1.value);

if(quant1 <= 0){}

else if(quant1 > 0){
car1.style.display = 'block';


valorto = valorto - soma1;
valor1 = valor1 + 150.00;
dade1 = dade1 + quant1;



soma1 = valor1 * dade1;
nome1 = 'Bolsa Victor Marrom'


valorto = valorto + soma1;
numeforma = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
}).format(valorto)
vlt.innerHTML = numeforma;

numeforma = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
}).format(soma1)


car1.innerHTML = ` 
<div class="ui">

    <div class="ifo">
        <strong>Item: `+nome1+`</strong>

        <strong>`+numeforma+`</strong>
    
        <strong>Unidades: `+dade1+`</strong>
    </div>
  

    <p onclick="rev1()">Remover</p>
</div>`;


};


valor1 = 0;
quant1 = 0;

}

function rev1(){
    valorto = valorto - soma1; 
    numeforma = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(valorto)
    vlt.innerHTML = numeforma; 

    soma1 = 0; 
    dade1 = 0; 


    car1.style.display = 'none'; 
    if(valorto < 0){
        valorto = 0;
    }
}


//  ------------------------------------------------------------------------
