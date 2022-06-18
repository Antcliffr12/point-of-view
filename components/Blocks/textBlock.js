
function TextBlock({ ...page }) {
    
  return (
    <section id="about" className="about" name="about">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>{page.textTitle}</h2>
            </div>
            <div className="section-content" dangerouslySetInnerHTML={{ __html: page.text.html }}></div>
        </div>
    </section>
  )
}

export default TextBlock