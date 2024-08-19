import imgReviewPlaceholder from '../assets/review-placeholder.jpg';

export function Reviews(props: {keyframe: string}) {
  return (
    <div className="bg-f7 pb-6">
      <div className="container relative -top-6">
          <div className="flex justify-between">
              <h3 className="font-semibold text-5xl text-174860 max-w-md">Cosa pensano di noi i nostri clienti.</h3>
              <div className="mr-16">
                  <div className="uppercase border px-9 py-3 text-xs font-semibold text-174860 border-174860 cursor-pointer hover:bg-2f88b1 hover:text-white hover:border-2f88b1 text-center mb-2">tutte le recensioni</div>
                  <div className="uppercase border px-9 py-3 text-xs font-semibold text-174860 border-174860 cursor-pointer hover:bg-2f88b1 hover:text-white hover:border-2f88b1 text-center">Lascia una recensione</div>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white text-xs p-8">
                  <img src={imgReviewPlaceholder} alt="image" />
                  <br />
                  <p className="pb-4"><strong>Nome e Cognome</strong><br /><span className="text-secondary">ha recensito</span> <strong>Magnistretch</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>
              </div>
              <div className="bg-white text-xs p-8">
                  <img src={imgReviewPlaceholder} alt="image" />
                  <br />
                  <p className="pb-4"><strong>Nome e Cognome</strong><br /><span className="text-secondary">ha recensito</span> <strong>Magnistretch</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>
              </div>
              <div className="bg-white text-xs p-8">
                  <img src={imgReviewPlaceholder} alt="image" />
                  <br />
                  <p className="pb-4"><strong>Nome e Cognome</strong><br /><span className="text-secondary">ha recensito</span> <strong>Magnistretch</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>
              </div>
              <div className="bg-white text-xs p-8">
                  <img src={imgReviewPlaceholder} alt="image" />
                  <br />
                  <p className="pb-4"><strong>Nome e Cognome</strong><br /><span className="text-secondary">ha recensito</span> <strong>Magnistretch</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>
              </div>
          </div>
      </div>
  </div>
  );
}
