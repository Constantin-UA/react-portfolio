import { Col, Container, Row } from 'react-bootstrap';

import { Newslatter } from './Newsletter';
import logo from '../assets/img/logo/logo.png';
import navLogo1 from '../assets/img/nav-icon1.svg';
import navLogo2 from '../assets/img/nav-icon2.svg';
import navLogo3 from '../assets/img/nav-icon.svg';
export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-item-center">
					<Newslatter />
					<Col sm={6}>
						<img src={logo} alt="logo" />
					</Col>
					<Col sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a href="https://www.linkedin.com/in/konstantin-shtanko-686021234/">
								<img src={navLogo1} alt="alt logo" />
							</a>
							<a href="https://www.facebook.com/constantine.shtanko">
								<img src={navLogo2} alt="alt logo" />
							</a>
							<a href="https://github.com/Constantin-UA">
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
