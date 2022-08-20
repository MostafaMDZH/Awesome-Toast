import '../styles/index.scss'
import '../styles/main.scss'
import '../styles/main.responsive.scss'
import '../node_modules/awesome-toast/src/toast.scss' //todo/dev

export default function MyApp({ Component, pageProps }){
    return <Component {...pageProps} />
}