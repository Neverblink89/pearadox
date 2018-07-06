import React, { Component } from 'react'

export default class Header extends Component {
  render() {
	return (
	  <header id="Header" className="global-header on-home">
		<div className="top">
			<div className="row">
				<div className="global-logo">
				<a></a>
				</div>
				<nav className="top-level-nav">
					<ul>
						<li>About</li>
						<li>User Guide</li>
					</ul>
				</nav>
				<nav className="utility-nav">
					<ul>
						<li></li>
						<li><a class="header-cta button-secondary">Log In</a></li>
					</ul>

				</nav>
			</div>
		</div>
	  </header>
	)
  }
}
