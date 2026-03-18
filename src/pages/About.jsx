import Breadcrumb from '../components/Breadcrumb'
import '../styles/about.css'

function About() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Om oss' }]} />

      <section className="about-content">
        <h1>Om Björnsmide</h1>
        <div className="about-container">
          <div className="about-text">
            <p>Björnsmide är en enskild firma som bildades 1999.</p>
            <p>
              Jag håller till på Maratongatan i Härnösand, men kommer från
              smidesvägen i Ramvik.
            </p>
            <p>
              Namnet Smidesvägen kommer från att min far hade smidesverkstad där.
              Jag är därmed uppväxt med smidet, som under flera år varit ett
              fritids intresse och så småningom växt till en egen firma. Den som
              är intresserad, kan träffa mig på olika marknader eller göra ett
              besök på Maratongatan, där har jag min smedja och en utställning av
              mina produkter.
            </p>
            <p className="about-signature">
              Smeden från Smidesvägen. Björn Räfsbäck.
            </p>
          </div>
          <div className="about-values">
            <div className="about-value">
              <h3>Smedjan</h3>
              <p>
                Jag jobbar med koleldad essa och städ, som min far gjorde före mig
                på Smidesvägen i Ramvik.
              </p>
            </div>
            <div className="about-value">
              <h3>Produkterna</h3>
              <p>
                Mest servettställ, ljuslyktor och adventstakar. Gärna med
                inspiration från Höga Kusten-naturen runtomkring.
              </p>
            </div>
            <div className="about-value">
              <h3>Marknader</h3>
              <p>
                Jag ställer ut på marknader i Ångermanland under sommarhalvåret.
                Annars går det bra att besöka smedjan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
