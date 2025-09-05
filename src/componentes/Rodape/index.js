import './Rodape.css'

 const Rodape = () => {
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://facebook.com' target='_blank' rel="noreferrer">
                            <img src='/imagens/face.png' alt='logo facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://x.com' target='_blank' rel="noreferrer">
                            <img src='/imagens/twitter.png' alt='logo twitter'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://instagram.com' target='_blank' rel="noreferrer">
                            <img src='/imagens/insta.png' alt='logo instagram'/>
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src='/imagens/logo.png' alt='logo organo'/>
            </section>

            <section>
                <p>Desenvolvido por Miguel Lamonier</p>
            </section>
        </footer>
    )
 }

 export default Rodape
