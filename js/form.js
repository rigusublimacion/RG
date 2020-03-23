document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let barbero = document.querySelector('#barbero').value;
    let servicio = document.querySelector('#servicio').value;

    let url = "https://api.whatsapp.com/send?phone=573229299191&text=*_RIGU Sublimación_*%0A*Compras*%0A%0A*¿Cual es tu nombre?*%0A" + cliente + "%0A*Indica la fecha de tu pedido*%0A" + fecha + "%0A*Indica la hora de tu pedido*%0A" + hora + "%0A*Como te gustaria que te entregaran*%0A" + Entrega + "%0A*¿Cual es el servicio que se desea realizar?*%0A" + servicio;
    window.open(url);

});
