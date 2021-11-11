console.log("Sync");

let mtemp="";
ingresarn=(n)=>{
    mtemp+=n;
    //interhtml  de mtemp para que refresque dilpay numeros,
    document.querySelector('.resultado').textContent = mtemp;
}


let m1=0;
let operacionpendiente="";
let operacion="";
operar=(operacion)=>{
    
switch (operacion) {
        case 8:
        operacionpendiente="";
        m1=0;
        console.log("entre")
        mtemp="";
        document.querySelector('.resultado').textContent = mtemp;

        break;
        case 4:
        resolver(operacionpendiente);
        operacionpendiente="x";
        // mtemp="";

        document.querySelector('.resultado').textContent = mtemp;

        break;       
         case 3:
        resolver(operacionpendiente);
        operacionpendiente="/";
        // mtemp="";

        document.querySelector('.resultado').textContent = mtemp;

        break;       
         case 1:
        resolver(operacionpendiente);
        operacionpendiente="+";
        // mtemp="";

        document.querySelector('.resultado').textContent = mtemp;

        break;        
        case 2:
        resolver(operacionpendiente);
        operacionpendiente="-";
        // mtemp="";

        document.querySelector('.resultado').textContent = mtemp;

        break;
        case 0:
            resolver(operacionpendiente);
            operacionpendiente="";
            document.querySelector('.resultado').textContent = m1;
            // mtemp="";
            break;
    }
   
  
}

resolver=(o)=>{
    m1 = parseInt(m1);
    var mtemp2 = parseInt(mtemp);
   
    switch (o) {
        case "x":
            m1=m1*mtemp2;
            mtemp = "";
            break;
        case "/":
                m1=m1/mtemp2;
                mtemp = "";
                break;

                case "+":
                    
                    m1+=mtemp2;
                    mtemp = "";
                    console.log(m1);
                    break;
                    case "-":
                        m1=m1-mtemp2;
                        mtemp = "";
                        break;
        default:
            break;
    }


}

