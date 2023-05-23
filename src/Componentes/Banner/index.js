import React from 'react'
import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minhaFoto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo
                </h1>
                <p className={styles.paragrafo}>
                    Meu nome é Renan Lucena e tenho 22 anos. Sou um desenvolvedor front-end com experiência sólida em HTML, CSS, JavaScript e React. Apaixonado por criar interfaces atraentes e funcionais, busco constantemente aprimorar minhas habilidades e aprender novas técnicas para oferecer produtos de alta qualidade. Com o uso do React, consigo desenvolver aplicações web dinâmicas e responsivas, aproveitando seu poderoso sistema de componentes. Estou sempre pronto para enfrentar novos desafios e contribuir para projetos inovadores.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido} alt='circulo colorido'
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto} alt='Minha Foto'
            
                />
            </div>
        </div>
    )
}
