import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mendigo Digital <a href="https://www.paypal.com/donate?hosted_button_id=RPGPQ64JK7B86">Ajude Alguém!</a>
        </h1>

        <p className={styles.description}>
          Lembre-se que a melhor forma de se sentir bem é fazendo o bem! {' '}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Doação para compra de um computador para estudos - Clique no link abaixo &rarr;</h3>
            <a href="https://www.paypal.com/donate?hosted_button_id=RPGPQ64JK7B86">Doar pelo PayPal</a>
          </a>
         
        </div>
      </main>

<footer className={styles.footer}>

          Powered by Mendigo Virtual
     
      </footer>
    </div>
  )
}
