import React from 'react';
import { View, Image,Text, StyleSheet } from 'react-native';

const App = () => {
  const scott = require('./assets/image/scottpilgrim.jpg');
  const batman = require('./assets/image/legobatman.jpg');
  const silencio = require('./assets/image/koenokatachi.jpg');
  const aventura = require('./assets/image/aventuralego.jpg');
  const umbrella = require('./assets/image/umbrella.jpg');
  const xereca = require('./assets/image/shrek.jpg');
  const sexo = require('./assets/image/sexeducation.jpg');
  const feliz = require('./assets/image/feliz.jpg');
  const gay = require('./assets/image/steven.jpg');
  const nigga = require('./assets/image/spiderverse1.jpg');

  return (



    <View style={styles.container}>


<View style={styles.container}>
    <Text style={styles.titulo}>Filmes/Series Favoritos:        </Text>
    </View>

      <Image source={scott} style={styles.image} />
       <Text style={styles.sinopse}>Guitarrista de uma banda de rock do colégio,
       o jovem Scott Pilgrim nunca teve problemas para conseguir namorada.
       O problema sempre foi se livrar delas. Mas com Ramona Flowers é diferente, 
       pois ele se apaixona perdidamente por ela e não será nada fácil conquistar seu amor.
       Ela tem o maior de todos os problemas: um exército de ex-namorados que não medem esforços para eliminar Scott da lista de interessados.
       </Text>

      <Image source={batman} style={styles.image} />
      <Text style={styles.sinopse}>
      Batman descobre que acidentalmente adotou um garoto órfão,
       que se torna ninguém menos que Robin. 
       A dupla formada pelo arrogante Homem-Morcego
        e o empolgado ajudante deve combater o crime e prender o Coringa.
      </Text>
      <Image source={silencio} style={styles.image} />
      <Text style={styles.sinopse}>
      Uma estudante com problemas de audição sofre com o bullying dos colegas e decide mudar de escola.
       Anos mais tarde, um dos rapazes que a importunavam resolve se redimir.
      </Text>
      <Image source={aventura} style={styles.image} />
      <Text style={styles.sinopse}>
      Emmet é uma minifigura LEGO perfeitamente comum e seguidora das regras,
       que é erroneamente identificado como uma pessoa extraordinária,
        essencial para salvar o mundo. 
        Ele é recrutado por uma irmandade de estranhos para uma jornada épica com a finalidade de deter um tirano,
         uma viagem para a qual Emmet está totalmente despreparado. Como companheiros dessa aventura, ele terá Vitrúvius,
          um velho místico, e a durona Lucy, que convoca o misterioso Batman, com quem compartilha uma história do passado.
      </Text>
      <Image source={umbrella} style={styles.image} />
      <Text style={styles.sinopse}>
      Com a morte do pai, irmãos com poderes extraordinários se reencontram e
       descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade.
      </Text>
      <Image source={xereca} style={styles.image} />
      <Text style={styles.sinopse}>
      Um ogro tem sua vida invadida por personagens de contos de fadas que acabam com a tranquilidade de seu lar. 
      Ele faz um acordo pra resgatar uma princesa.
      </Text>
      <Image source={sexo} style={styles.image} />
      <Text style={styles.sinopse}>
      Otis Milburn é um adolescente socialmente inapto que vive com sua mãe, Jean ,
       uma terapeuta sexual com uma rotina sexual muito ativa. Apesar de não ter perdido a virgindade ainda,
        ele é uma espécie de especialista em sexo. Junto com Maeve, uma colega de classe rebelde,
         ele resolve montar sua própria clínica de saúde sexual para ajudar outros estudantes da escola.
          Em um lugar com tantos adolescentes com emoções à flor da pele e em fase de descoberta,
           o empreendimento de Otis e Maeve acaba gerando todo tipo de situação inesperada. Além disso,
            também conhecemos Eric, o melhor amigo gay de Otis.
      </Text>
      <Image source={feliz} style={styles.image} />
      <Text style={styles.sinopse}>
      Em Felicidade, Tommy, de 11 anos, está na estrada novamente com seus pais excêntricos. 
      Desta vez, seu pai, recém-saído da prisão, prometeu à menina que ela não perderia o primeiro dia de aula do semestre,
       como em outros anos. Isso antes dele roubar um carro esporte, sua mãe desaparecer e um astronauta aparecer,
        colocando em risco a presença da jovem em seu tão aguardado dia.
      </Text>
      <Image source={gay} style={styles.image} />
      <Text style={styles.sinopse}>
      Steven acredita que não precisa mais defender a Terra até que uma nova ameaça aparece.
      </Text>
      <Image source={nigga} style={styles.image} />
      <Text style={styles.sinopse}>
      Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn,
       se torna o Homem-Aranha, inspirado no legado do já falecido Peter Parker. Entretanto, 
       ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter,
        vestindo o traje do herói por baixo de um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, 
        assim como outras versões do Homem-Aranha.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
  },
  image: {
    width: 400,
    height: 600,
  },
  titulo:{
    color:"#800000",
    fontSize: 50,
    paddingLeft: 80,
    fontFamily:'Impact',
    alignItems: 'center',
},
sinopse:{
  color:"#800000",
  fontSize: 30,
  paddingLeft: 60,
  fontFamily:'Small Fonts'
},
});

export default App;
