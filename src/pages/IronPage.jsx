import Breadcrumb from '../components/Breadcrumb'
import '../styles/iron-page.css'

function IronPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Hur järn tillverkas' }]} />

      <section className="iron-page">
        <h1>Från malm till smide</h1>
        <p>
          Utan järn, inget smide. Redan för tusentals år sedan lärde sig människan
          att utvinna järn ur malm - och sedan dess har smeden haft en central
          roll i samhället. Här visar vi resan från råmaterial till det smidesjärn
          vi formar i vår smedja.
        </p>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dZU6gMvS824"
            title="Hur järn tillverkas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2>Smedens material</h2>
        <table>
          <thead>
            <tr>
              <th>Egenskap</th>
              <th>Värde</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Material</td>
              <td>Järn (Fe)</td>
            </tr>
            <tr>
              <td>Smidestemperatur</td>
              <td>900 - 1 200 °C</td>
            </tr>
            <tr>
              <td>Smältpunkt</td>
              <td>1 538 °C</td>
            </tr>
            <tr>
              <td>Vanligaste malmen</td>
              <td>Hematit (Fe₂O₃)</td>
            </tr>
            <tr>
              <td>Eldstad</td>
              <td>Koleldad smidesessa</td>
            </tr>
            <tr>
              <td>Verktyg</td>
              <td>Hammare, städ, tång &amp; mejsel</td>
            </tr>
            <tr>
              <td>Teknik</td>
              <td>Konstsmide &amp; frihandssmide</td>
            </tr>
            <tr>
              <td>Tradition</td>
              <td>Sedan ca 3000 f.Kr.</td>
            </tr>
          </tbody>
        </table>

        <p>
          Vill du läsa mer om hur järn förädlas till stål?{' '}
          <a
            href="https://sv.wikipedia.org/wiki/St%C3%A5l"
            target="_blank"
            rel="noopener"
          >Läs mer på Wikipedia</a>.
        </p>
      </section>
    </>
  )
}

export default IronPage
