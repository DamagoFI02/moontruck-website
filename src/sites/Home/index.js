import Header from '../../components/Header';
import TeaserMain from '../../components/TeaserMain';
import TeaserSec from '../../components/TeaserSec';
import TeaserTrd from '../../components/TeaserTrd';

import teaserImgMain from '../../images/11.png';
import teaserImgSec from '../../images/2.png';
import teaserImgTrd from '../../images/6.png';

function Home() {
    return (
        <>
            <div className='bg-neutral-900'>
                <Header />

                <TeaserMain heading='EXOSKELETT' imgsrc={teaserImgMain}>
                    Die äußere Hülle kann auf verschiedene Weisen gestaltet
                    werden: Sie haben die Möglichkeit, sie mithilfe von
                    Plexiglas-Vorlagen präzise auszuschneiden oder sie mit einem
                    hochwertigen 3D-Drucker exakt zu erstellen. Zusätzlich
                    bieten wir für das Chassis eine CNC-Fräs-Vorlage an, die
                    Ihnen ermöglicht, noch mehr Stabilität zu erreichen.
                </TeaserMain>

                <TeaserSec
                    heading='Time of Flight Sensoren in der Front'
                    imgsrc={teaserImgSec}
                >
                    An der Vorderseite sind Time-of-Flight-Sensoren integriert,
                    die präzise Entfernungen zu Hindernissen messen können.
                    Darüber hinaus ist unter der Haube eine Kamera installiert,
                    die Ihnen eine Echtzeitansicht von allem bietet, was auf der
                    Straße passiert.
                </TeaserSec>

                <TeaserTrd heading='Für Updates klicken!' imgsrc={teaserImgTrd}>
                    Bald erhältlich. Bleib auf dem laufenden und sichere dir
                    deine Moontruck
                </TeaserTrd>
            </div>
        </>
    );
}

export default Home;
