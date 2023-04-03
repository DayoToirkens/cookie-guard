const CookiePopup = () => {
  return (
    <div id="cookiebanner">
      <div id="cookiebanner_content-wrapper">
        <div className="cookiebanner_content" id="cookiebanner_content_0">
          <h2>Onze site maakt gebruik van cookies</h2>
          <p>
            We maken gebruiken van cookies om content en advertenties te
            personaliseren, om functies voor social media te bieden en om ons
            websiteverkeer te analyseren.
            <button id="expand-intro">Meer informatie.</button>
          </p>
          <div>
            <button id="set_all_cookies" className="cookiebanner_button">
              <span>Alle cookies accepteren</span>
            </button>
          </div>
          <div>
            <button
              id="showCookieDetailsButton"
              className="cookiebanner_button cookiebanner_button-border"
            >
              <span>Wijzig de cookie-instellingen</span>
            </button>
          </div>
        </div>
        <div className="cookiebanner_content" id="cookiebanner_content_1">
          <h2>Onze site maakt gebruik van cookies</h2>
          <p className="cookiebanner_intro">
            We maken gebruiken van cookies om content en advertenties te
            personaliseren, om functies voor social media te bieden en om ons
            websiteverkeer te analyseren. Ook delen we informatie over uw
            gebruik van onze site met onze partners voor social media,
            adverteren en analyse. Deze partners kunnen deze gegevens combineren
            met andere informatie die u aan ze heeft verstrekt of die ze hebben
            verzameld op basis van uw gebruik van hun services.
          </p>
          <form id="custom_cookie_form">
            <label
              className="cookiebanner_checkbox-container"
              htmlFor="required"
            >
              <div className="cookiebanner_checkbox_text">
                <h5>Noodzakelijk</h5>
                <p>
                  Noodzakelijke cookies helpen een website bruikbaarder te
                  maken, door basisfuncties als paginanavigatie en toegang tot
                  beveiligde gedeelten van de website mogelijk te maken. Zonder
                  deze cookies kan de website niet naar behoren werken.
                </p>
              </div>
              <input
                id="required"
                type="checkbox"
                checked={true}
                name="required"
                disabled
              />
              <span className="cookiebanner_checkmark"></span>
            </label>
            <label
              className="cookiebanner_checkbox-container"
              htmlFor="statistics"
            >
              <div className="cookiebanner_checkbox_text">
                <h5>Statistieken</h5>
                <p>
                  Statistische cookies helpen eigenaren van websites begrijpen
                  hoe bezoekers hun website gebruiken, door anoniem gegevens te
                  verzamelen en te rapporteren.
                </p>
              </div>
              <input id="statistics" type="checkbox" name="statistics" />
              <span className="cookiebanner_checkmark"></span>
            </label>
            <label
              className="cookiebanner_checkbox-container"
              htmlFor="marketing"
            >
              <div className="cookiebanner_checkbox_text">
                <h5>Marketing</h5>
                <p>
                  Marketingcookies worden gebruikt om bezoekers te volgen
                  wanneer ze verschillende websites bezoeken. Hun doel is
                  advertenties weergeven die zijn toegesneden op en relevant
                  zijn voor de individuele gebruiker. Deze advertenties worden
                  zo waardevoller voor uitgevers en externe adverteerders.
                </p>
              </div>
              <input id="marketing" type="checkbox" name="marketing" />
              <span className="cookiebanner_checkmark"></span>
            </label>

            <button className="cookiebanner_button" type="submit">
              <span>Cookie-instellingen opslaan</span>
            </button>
          </form>

          <p className="cookiebanner_disclaimer">
            U kunt uw voorkeur altijd wijzigen via ‘Cookie policy’ onder aan de
            pagina. Lees ons
            <a href="/privacy-policy">Privacy-</a> en
            <a href="/cookie-policy">cookie policy</a> voor meer informatie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
