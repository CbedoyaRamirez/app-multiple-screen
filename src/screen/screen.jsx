
import Menu from '../menu/menu';
import MenuLateral from '../menuLateral/menuLateral';

import './screen.css';

function Screen() {

    return (
        <>
            <Menu />
            <main>
                <section className="caja" >
                    <MenuLateral />
                    <h3>Pantalla 1</h3>
                    <iframe width="100%" height="93%" src="https://www.youtube.com/embed/Q6GkCmXiGhE?si=AbfLo1jF27GegxEM&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                </section>
                <section className="caja">
                    <h3>Pantalla 2</h3>
                    <iframe width="100%" height="93%" src="https://www.youtube.com/embed/pv1ZQRnOTIs?si=qOBSLlPzmBNaTqWt&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                </section>
                <section className="caja">
                    <h3>Pantalla 3</h3>
                    <iframe width="100%" height="93%" src="https://www.youtube.com/embed/BNVEBwbA3c8?si=-g646SeNTND7X-7s&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                </section>
                <section className="caja">
                    <h3>Pantalla 4</h3>
                    <iframe width="100%" height="93%" src="https://www.youtube.com/embed/tsStUN73_6I?si=JnhWaQzUJ9pGLG-g&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                </section>
                <section className="caja">
                    <h3>Pantalla 5</h3>
                    <iframe width="100%" height="93%" src="https://www.youtube.com/embed/4e8Iw3Frf1A?si=9ytwtV8rqXNDfZRM&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                </section>
                <section className="caja">
                    <h3>Pantalla 6</h3>
                    <iframe width="100%" height="93%" src="https://www.youtube.com/embed/JSUQFTeymJ0?si=SCpLx4ZnoCIkOKUL&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                </section>
            </main >
        </>
    )
}
export default Screen;