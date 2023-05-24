import React from 'react'
import styles from './SobreMim.module.css';
import PostModelo from 'Componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/minhaFoto.png';

export default function SobreMim() {
  return (
    <PostModelo 
    fotoCapa={fotoCapa}
    titulo={"Sobre mim"}
    >
      <h3 className={styles.subtitulo}>Olá, eu sou o Renan</h3>

      <img 
        src={fotoSobreMim}
        alt='Foto de Renan'
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>Meu nome é Renan Lucena e tenho 22 anos. Sou um desenvolvedor front-end com experiência sólida em HTML, CSS, JavaScript e React. Apaixonado por criar interfaces atraentes e funcionais, busco constantemente aprimorar minhas habilidades e aprender novas técnicas para oferecer produtos de alta qualidade. Com o uso do React, consigo desenvolver aplicações web dinâmicas e responsivas, aproveitando seu poderoso sistema de componentes. Estou sempre pronto para enfrentar novos desafios e contribuir para projetos inovadores.</p>
    </PostModelo>
  )
}
