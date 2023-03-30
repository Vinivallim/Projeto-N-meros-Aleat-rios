import React from 'react'

import {Text, View, Button}  from 'react-native'

const gerarNumeroAleatorio=()=>{

    var numero_aleatorio= Math.random();

    var numero_aleatorio1= Math.random();

    var numero_aleatorio2= Math.random();

    var numero_aleatorio3= Math.random();

    var numero_aleatorio4= Math.random();

    numero_aleatorio = Math.floor(numero_aleatorio*101)

    numero_aleatorio1 = Math.floor(numero_aleatorio1*101)

    numero_aleatorio2 = Math.floor(numero_aleatorio2*101)

    numero_aleatorio3 = Math.floor(numero_aleatorio3*101)

    numero_aleatorio4 = Math.floor(numero_aleatorio4*101)

    var operacao = numero_aleatorio*numero_aleatorio1+numero_aleatorio2-numero_aleatorio3+numero_aleatorio4

    alert(numero_aleatorio+"*"+numero_aleatorio1+"+"+numero_aleatorio2+"-"+numero_aleatorio3+"+"+numero_aleatorio4+"="+operacao);
}

export default ()=>{


    return(

        <View>
            <Text>Gerando e calculando números Aleatórios</Text>
            <Button

                title="Gerar e calcular números Aleatórios" 

                onPress={gerarNumeroAleatorio}

            >
            </Button>
        </View>
    )

}