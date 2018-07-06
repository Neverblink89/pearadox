import React, { Component } from 'react'

export default class Home extends Component {
  render() {
	return (
	<section className="register" >
		<div class="row">
			<div className="container">
				<div className="content">
					<div className="heading-rotation-container">
						<h1>Meet Pearadox, your anywhere access problem identifier.</h1>
					</div>
					<p className="description">Capture, organize, and share notes from anywhere. Your best ideas are always with you and always in sync.</p>
				</div>
					<div className="divider-wrapper">
						<div className="divider"></div>
					</div>
				<div className="sign-up">
					<div  className="sign-up-inner">
						<h3>Sign Up</h3>
						<form>
							<div className="field-item" >
								<input type="email" placeholder="Email" id="email" name="email" autofocus=""/>
							</div>
							<div className="field-item" >
							<input type="password" placeholder="Password" id="password" name="password" />
							</div>
							<div className="field-item" >
								<input type="text" placeholder="Company" id="company" name="company"/>
							</div>
							<p className="legal">By clicking Sign up, I agree to the <span><b>Terms of Service</b></span> and <br/><span><b>Privacy Policy</b></span>.</p>
							<div className="submit-container">
							<input type="submit" id="contact-form-submit" class="button-primary" name="register" value="Sign up for free"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
  }
}
