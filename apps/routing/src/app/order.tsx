import React, { useRef } from 'react'
import { useEffect, useState } from 'react'

export function Order() {
  const pizzas = ['pepperoni', 'hawaii', 'spicy', 'vegetar']
  const [chosenPizza, setChosenpizza] = useState('pepperoni')
  const [isOrderSent, setIsOrderSent] = useState(false)
  const orderConfirmed = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isOrderSent) {
      orderConfirmed.current?.scrollIntoView()
    }
  }, [isOrderSent])

  return (
    <article>
      <header>
        <h1>Bestill pizza</h1>
        <p>Vennligst legg inn din bestilling under.</p>
      </header>

      <section>
        <form>
          <fieldset>
            <legend>Din bestilling</legend>
            <div className="pizza-wrap">
              <div>
                <div className="form-field">
                  <label htmlFor="pizza">Pizza</label>
                  <select
                    id="pizza"
                    onChange={(e) => setChosenpizza(e.target.value)}
                  >
                    {pizzas.map((pizza, index) => {
                      return (
                        <option key={index} value={pizza}>
                          Pizza {pizza.charAt(0).toUpperCase() + pizza.slice(1)}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="drikke">Drikke</label>
                  <select id="drikke">
                    <option>Farris</option>
                    <option>Coca Cola</option>
                    <option>Fanta</option>
                  </select>
                </div>
              </div>

              <img
                src={'assets/' + chosenPizza + '.svg'}
                alt={chosenPizza}
              ></img>
            </div>
          </fieldset>

          <fieldset>
            <legend>Kontaktinformasjon</legend>
            <div>
              <div className="form-field">
                <label htmlFor="adresslinje">Adresse</label>
                <input type="text" id="adresslinje" />
              </div>

              <div className="post-wrap">
                <div className="form-field">
                  <label htmlFor="postnummer">Postnummer</label>
                  <input type="text" id="postnummer" />
                </div>

                <div className="form-field">
                  <label htmlFor="poststed">Poststed</label>
                  <input type="text" id="poststed" />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="telefon">Telefon</label>
                <input type="text" id="poststed" />
              </div>
            </div>
          </fieldset>

          <button type="button" onClick={() => setIsOrderSent(true)}>
            Send inn ordre
          </button>
          {isOrderSent && (
            <div className="pending-order" ref={orderConfirmed} aria-live="polite" >
              <h2>Din ordre er på vei!</h2>
              <p>Vi ringer når vi står utenfor.</p>
            </div>
          )}
        </form>
      </section>
    </article>
  )
}
