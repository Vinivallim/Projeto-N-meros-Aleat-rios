import React from 'react'

import {Text, View, Button}  from 'react-native'

const gerarNumeroAleatorio=()=>{

    var random_num= Math.random();

    var random_num1= Math.random();

    var random_num2= Math.random();

    var random_num3= Math.random();

    var random_num4= Math.random();

    random_num = Math.floor(random_num*101)

    random_num1 = Math.floor(random_num1*101)

    random_num2 = Math.floor(random_num2*101)

    random_num3 = Math.floor(random_num3*101)

    random_num4 = Math.floor(random_num4*101)

    var operacao = random_num*random_num1+random_num2-random_num3+random_num4
    var operacao2 = random_num-random_num1+random_num2*random_num3*random_num4
    var operacao3 = random_num-random_num1*random_num2-random_num3*random_num4

    alert(random_num+"*"+random_num1+"+"+random_num2+"-"+random_num3+"+"+random_num4+"="+operacao+'\n'
    +random_num+"-"+random_num1+"+"+random_num2+"*"+random_num3+"*"+random_num4+"="+operacao2+'\n'
    +random_num+"-"+random_num1+"*"+random_num2+"-"+random_num3+"*"+random_num4+"="+operacao3);
}

export default ()=>{


    return(

        <View>
            <Text style={{textAlign: "center", fontSize: 18, fontWeight: 'bold',}}>Gerando e calculando números Aleatórios</Text>
            <Text style={{textAlign: "center", fontSize: 14}}>Este App possui um botão que gera 5 números Aleatórios dentro de um range de 0 a 100.</Text>
            <Text style={{textAlign: "center", fontSize: 14}}>Após serem gerados eles são colocados em 3 calculos envolvendo os 5 números.</Text>
            <Text style={{textAlign: "center", fontSize: 14}}>Os calculos consistem de somas, subratações e multiplicações.</Text>
            <Button color="#c7032e"

                title="Gerar e calcular números Aleatórios" 

                onPress={gerarNumeroAleatorio}

            >
            </Button>
        </View>
    )

}