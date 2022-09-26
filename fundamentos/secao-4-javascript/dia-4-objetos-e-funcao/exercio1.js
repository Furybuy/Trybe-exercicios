let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Boas-vindas ' + info.personagem + '.');

  info['recorrente'] = 'Sim';

  console.log(info.recorrente);

  for (let i in info){
    console.log(i);
  }

  for (let i in info){
    console.log(info[i]);
  }
  