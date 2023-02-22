import { Col, Container, Row } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';

import logo from '../assets/img/logo.svg';
import navLogo1 from '../assets/img/nav-icon1.svg';
import navLogo2 from '../assets/img/nav-icon2.svg';
import navLogo3 from '../assets/img/nav-icon3.svg';
export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-item-center">
					<MailchimpForm />
					<Col sm={6}>
						<img src={logo} alt="logo" />
					</Col>
					<Col sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a href="#">
								<img src={navLogo1} alt="alt logo" />
							</a>
							<a href="#">
								<img src={navLogo2} alt="alt logo" />
							</a>
							<a href="#">
								<img src={navLogo3} alt="alt logo" />
							</a>
						</div>
						<p>CopyRight 2023. All Right Reserved K</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
