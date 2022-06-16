import React, { useState, useEffect } from 'react'
import TopNavHeaderScroll from '../lib/hooks'

function TopBar() {

	const showTopBar = TopNavHeaderScroll();

	return (
		<div id="topbar" className={`fixed-top d-flex align-items-center ${showTopBar ? '' : 'topbar-scroll'}`}>
			<div className="container d-flex align-items-center justify-content-center justify-content-md-between">
				<div className="contact-info d-flex align-items-center">
					<i className="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">info@example.com</a>
					<i className="bi bi-phone-fill phone-icon"></i> +1 555-555-5555
				</div>
				<div className="cta d-none d-md-block">
					<a href="#">Contact Us</a>
				</div>
			</div>
		</div>
	)
}

export default TopBar