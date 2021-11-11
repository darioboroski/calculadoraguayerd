console.log("Sync");

let mtemp="";
ingresarn=(n)=>{
    mtemp+=n;

    document.querySelector('.resultado').textContent = mtemp;//refrescara siempre el display manteniendolo actualizado
}


let m1=0;
let m2=0;
let operacionpendiente="";
let operacion="";
operar=(operacion)=>{
    
switch (operacion) {
        case 8://operacion c (BORRA TODO)
        // lo que hara que si luego de dar  = quiere realizar una operacion adicional con el resultado lo dejara, por ende tomara el m1(resultado) y lo cargara como mtemp,
        if(mtemp===""){
            mtemp=m1;
        };
        //

        operacionpendiente="";
        m1=0;

        mtemp="";
        document.querySelector('.resultado').textContent = mtemp; //idem linea 7 de de la funcion ingresarn 

        break;
        case 4://operacion multiplicacion
        // lo que hara que si luego de dar  = quiere realizar una operacion adicional con el resultado lo dejara, por ende tomara el m1(resultado) y lo cargara como mtemp,
        if(mtemp===""){
            mtemp=m1;
        };
        //

        resolver(operacionpendiente);
        operacionpendiente="x";
        

        document.querySelector('.resultado').textContent = mtemp;

        break;       
        
        case 3: //operacion divicion
        // lo que hara que si luego de dar  = quiere realizar una operacion adicional con el resultado lo dejara, por ende tomara el m1(resultado) y lo cargara como mtemp,
        if(mtemp===""){
            mtemp=m1;
        };
        //
        resolver(operacionpendiente);
        operacionpendiente="/";
        
        document.querySelector('.resultado').textContent = mtemp;

        break;       
         case 1:// operacion suma.
        // lo que hara que si luego de dar  = quiere realizar una operacion adicional con el resultado lo dejara, por ende tomara el m1(resultado) y lo cargara como mtemp,
        if(mtemp===""){
            mtemp=m1;
        };
        //

         resolver(operacionpendiente);
        operacionpendiente="+";

        document.querySelector('.resultado').textContent = mtemp;

        break;        
        case 2:// operacion resta
                // lo que hara que si luego de dar  = quiere realizar una operacion adicional con el resultado lo dejara, por ende tomara el m1(resultado) y lo cargara como mtemp,
                if(mtemp===""){
                    mtemp=m1;
                };
                //
        
        resolver(operacionpendiente);
        operacionpendiente="-";
        document.querySelector('.resultado').textContent = mtemp;

        break;
        case 0://operador igual (resultado)
            resolver(operacionpendiente);
            operacionpendiente="";
            mtemp="";
    
            if(!m1){
                m1=m2;
            }
            document.querySelector('.resultado').textContent = m1;
            m2=m1;
            break;
    }
   
  
}

resolver=(o)=>{
    m1 = parseInt(m1);
    var mtemp2 = parseInt(mtemp); //este paso de variables se utilizara para no generar errores entre el camvio de tipos de bariables de string a int por eso utilizaremos una segunda variable temporaria.
   console.log("resolver mtamp2" +mtemp2);
    switch (o) {
        case "x":
            m1=m1*mtemp2;
            mtemp ="";
            break;
        case "/":
                m1=m1/mtemp2;
                mtemp = "";
                break;

                case "+":
                    
                    m1+=mtemp2;
                    mtemp = "";
                break;
                    case "-":
                        m1=m1-mtemp2;
                        mtemp = "";
                        break;
        default:
            m1=mtemp2; //lo que hara el default es si aun no existe ninguna operacion pendiente guardar el mtemp en m1
            mtemp ="";
            

            break;
    }


}
function PulsarTecla(event)
{
    tecla = event.keyCode;
   console.log(tecla);
   
   // INGRESO DE OPERACIONES POR TECLADO
    switch (tecla) {
            case 46://funcion c (del)
            operar(8);
            break;
            case 107://funcion suma
            operar(1);
            
            break;
            case 109://funcion resta
            operar(2);
            
            break;
            case 106://funcion multiplicacion
            operar(4);
            break;
            case 111://funcion division
            operar(3);
            break;
            case 13://funcion IGUAL= (ENTER)
            operar(0);
            break;

    
        default:
            //INGERSO DE NUMEROS POR TECLADO  numeros horizontales
            if(tecla>47 && tecla<58){ // con esto remplaso al switch largo de abajo para ingresar numeros
            ingresarn(tecla-48);     
            }
        //INGERSO DE NUMEROS POR TECLADO  numerico.
           if(tecla>95 && tecla<106){ // con esto remplaso al switch largo de abajo para ingresar numeros
            ingresarn(tecla-96);     
            }
        break;
    }
}
window.onkeydown=PulsarTecla;     
    // switch (tecla) {
    //     case 48:
    //         ingresarn(0);
    //      break;     
    //      case 49:
    //      ingresarn(1);
    //   break;
    //   case 50:
    //     ingresarn(2);
    //  break;
    //  case 51:
    //     ingresarn(3);
    //  break;
    //  case 52:
    //     ingresarn(4);
    //  break;
    //  case 53:
    //     ingresarn(5);
    //  break;
    //  case 54:
    //     ingresarn(6);
    //  break;
    //  case 55:
    //     ingresarn(7);
    //  break;
    //  case 48:
    //     ingresarn(8);
    //  break;
    //  case 48:
    //     ingresarn();

//        default:
//            break;
//    }
//     {
    
            
     
   


