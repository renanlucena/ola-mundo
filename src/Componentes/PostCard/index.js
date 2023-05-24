import { Link } from 'react-router-dom';
import styles from './Post.module.css';

import React from 'react'

export default function PostCard({ post }) {
  return (
    <Link to={`posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          alt='Imagem de capa do Post'
          src={`/assets/posts/${post.id}/capa.png`}

        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <button className={styles.botaoLer}>Ler</button>
      </div>
    </Link>
  )
}

