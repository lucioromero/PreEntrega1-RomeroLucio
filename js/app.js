alert("Hola! Esto es un simulador de viajes. Aca vas a poder calcular el gasto de nafta en base a la distancia de tu viaje.")

function menu(){
    let opcion
    let destino
    let kilometros
    do{
        opcion = parseInt(prompt("Selecciona la opción que desees:\n1 - Calcular gastos y distancias\n2 - Salir"))
        switch(opcion){
            case 1: destino = prompt("Ingresa tu destino")
                    kilometros = parseInt(prompt("Ingresa la cantidad de kilometros desde tu ubicacion hasta tu destino"))
                    nafta(destino, kilometros)
            break
            
            case 2: alert("Muchas gracias, ¡te esperamos para planear más viajes! ;)")
            break

            default: alert("¡OUCH! Opción inválida")
        }
    } while(opcion != 2)
}

menu()

function nafta(lugar, km){
    let gasto = km * 0.07
    let naftaPremium = gasto * 185.70
    let naftaComun = gasto * 150.90
    alert('En un viaje a ' + lugar + ' gastas, aproximadamente, ' + Math.floor(gasto) + ' litros de nafta. Esto suma aproximadamente $' + Math.floor(naftaPremium) + ' si cargas nafta premium, y aproximadamente $' + Math.floor(naftaComun) + ' si cargas nafta comun.')
}



