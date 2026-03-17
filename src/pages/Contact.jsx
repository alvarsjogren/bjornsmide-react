import Breadcrumb from '../components/Breadcrumb'
import '../styles/contact.css'

function Contact() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Kontakta oss' }]} />

      <section className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h1>Kontakta oss</h1>
            <p>
              Har du frågor om våra produkter eller vill beställa något
              specialdesignat? Tveka inte att höra av dig!
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <h3>Email</h3>
                <p>info@bjornsmide.se</p>
                <h3>Telefon</h3>
                <p>070-348 92 15</p>
                <h3>Adress</h3>
                <p>Maratongatan 16, 871 51 Härnösand</p>
              </div>
            </div>
            <div className="contact-map">
              <h3>Besök oss</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!!1d6000.0!2d17.91808353570377!3d62.64276088937155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46649ac3479c5e97%3A0x7b60b08092c2cfdc!2sMaratongatan%2016%2C%20871%2051%20H%C3%A4rn%C3%B6sand!5e0!3m2!1ssv!2sse!4v1771199264394!5m2!1ssv!2ss"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Björnsmide"
              ></iframe>
            </div>
          </div>

          <form className="contact-form" action="#" method="post">
            <h2>Skicka ett meddelande</h2>

            <div className="form-field">
              <label htmlFor="name">Namn</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ditt namn"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="namn@exempel.se"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="subject">Ämne</label>
              <select id="subject" name="subject">
                <option value="general">Allmän fråga</option>
                <option value="order">Beställning</option>
                <option value="custom">Specialbeställning</option>
                <option value="other">Övrigt</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Meddelande</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Skicka meddelande</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
