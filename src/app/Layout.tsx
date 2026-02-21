import { Header } from 'widgets/header/Header'
import { Footer } from 'widgets/footer/Footer'
import { SidebarBlock } from 'widgets/sidebar/Sidebar'
import styles from './styles/Layout.module.scss'
import { Outlet } from 'react-router-dom'

export const Layout = () => {

  return (
    <div className={styles.app}>
      <SidebarBlock />
      <div className={styles.wrapper}>
        <Header />


        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

