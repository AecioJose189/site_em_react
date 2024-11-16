import imagem_direita from '../assets/image/foto_padding_left.png'
import './SobreNos.css'
function SobreNos(){
    return(
        <div id='SobreNos'>
            <header className='header-sobrenos'>
                <h1>Sobre nós</h1>
            </header>
            <div className='separadores'>
                <section className='left'>
                    <p>Assistência técnica especializada em celular, troca de tela, 
                        troca de Bateria, troca de Conector, desbloqueio e reparo de placas. 
                        Linhas: Android e Iphone, <strong>delivery: Buscamos seu celular sem custo</strong> </p>
                </section>
                <section className='right'>
                    <img src={imagem_direita} alt="" />
                </section>
            </div>
        </div>
    )
}

export default SobreNos