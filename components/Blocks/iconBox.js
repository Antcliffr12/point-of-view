
function CtaBox( { ...page } ) {
  return (
    <section id="icon-boxes" className="icon-boxes">
      <div className="container">
        <div className="row">
          {page.iconBoxes.map((box, i) =>  
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" key={box.title} data-aos-delay={i * 100}>
             <div className="icon-box">
               <div className="icon"><i className={box.icon}></i></div>
               <h4 className="title">{box.title}</h4>
               <p className="description">{box.description}</p>
             </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CtaBox