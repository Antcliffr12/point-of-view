import Image from "next/image"

function Team({ ...page }) {


  return (
	<section id="team" className='team'>
		<div className="container">
			<div className="section-title">
				<h2>Team</h2>
				<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
			</div>
			<div className="row">
				{page.people.map( ( person, i) => 
					<div className="col-md-6" data-aos="fade-up" key={person.name} data-aos-delay={i * 200}>
						<div className="team-member d-flex align-items-start">
							<div className="pic">
								<Image
									src={person.image.url}
									alt={person.name}
									height={180}
									width={180}
								/>
							</div>	
							<div className="team-member-info">
								<h4>{person.name}</h4>
								<span>{person.position}</span>
								<div className="social">
									{person.twitter ? <a href={`https://twitter.com/${person.twitter}`} target="_blank"><i className="bi bi-twitter"></i></a> : '' }
									{person.facebook ? <a href={`https://facebook.com/${person.facebook}`}  target="_blank"><i className="bi bi-facebook"></i></a> : '' }
									{person.linkedin ? <a href={`https://linkedin.com/in/${person.linkedin}`}  target="_blank"><i className="bi bi-linkedin"></i></a> : '' }
								</div>

							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	</section>
  )
}

export default Team