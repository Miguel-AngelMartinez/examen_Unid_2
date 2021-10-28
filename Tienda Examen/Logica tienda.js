$(document).ready(function () {
   
    var producto1=["pesas","silla del poder","Discos","Kit pesas","Mancuerna","Piston"];
    var cantidad1=[3,5,5,5,5,5];
    var precios=[50,300,250,200,10,650];
    var costo=0;

    
    //uno
    $("#uno").click(function () {
        cantidad1[0]--;
        costo+=precios[0];

        alert(`producto ${producto1[0]} agregado al carrito`);
        $("#aux1").html(`${producto1[0]} costo ${precios[0]}`);
        $("#total").html(costo);
        $("#in1").html(cantidad1[0]);
    });
     //dos
     $("#dos").click(function () {
        cantidad1[1]--;
        costo+=precios[1];
        alert(`producto ${producto1[1]} agregado al carrito`);
        $("#aux2").html(`${producto1[1]} costo ${precios[1]}`);
        $("#total").html(costo);
        $("#in2").html(cantidad1[1]);
      
    });
     //tres
     $("#tres").click(function () {
        cantidad1[2]--;
        costo+=precios[2];
        alert(`producto ${producto1[2]} agregado al carrito`);
        $("#aux3").html(`${producto1[2]} costo ${precios[2]}`);
        $("#total").html(costo);
        $("#in3").html(cantidad1[2]);
        
    });
     //cuatro
     $("#cuatro").click(function () {
        cantidad1[3]--;
        costo+=precios[3];
        alert(`producto ${producto1[3]} agregado al carrito`);
        $("#aux4").html(`${producto1[3]} costo ${precios[3]}`);
        $("#total").html(costo);
        $("#in4").html(cantidad1[3]);
      
    });
     //cinco
     $("#cinco").click(function () {
        cantidad1[4]--;
        costo+=precios[4];
        alert(`producto ${producto1[4]} agregado al carrito`);
        $("#aux5").html(`${producto1[4]} costo ${precios[4]}`);
        $("#total").html(costo);
        $("#in5").html(cantidad1[4]);
        
    //seis
    $("#seis").click( function () {
        cantidad1[5]--;
        costo+=precios[5];
        alert(`producto ${producto1[5]} agregado al carrito`);
        $("#aux6").html(`${producto1[5]} costo ${precios[5]}`);
        $("#total").html(costo);
        $("#in6").html(cantidad1[5]);
    });

    $("#confirmar").click( function () {

        for (let index = 0; index < cantidad1.length; index++) {
            if(cantidad1[index]==0){
                alert(`el producto ${producto1[index]} esta agotado !!`);
            }
            
        }
    
        alert(`gracias por su compra usted pago ${costo}`);
        
    });
    
    
});
});
