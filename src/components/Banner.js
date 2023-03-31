import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/header-logo.svg';
import 'animate.css/animate.min.css';

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ['Web Developer', 'React lover', 'UI/UX Designer'];
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);
	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updateText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updateText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updateText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updateText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};
	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<div className="animate__animated animate__fadeIn">
							<span className="tagline">Welcome to my portfolio site!</span>
							<h1>{`Hi I'm Konstantin`}</h1>
							<h1>
								{`-`}
								<span className="wrap"> {text}</span>
							</h1>
							<p>
								As a developer, I prioritize user experience and accessibility, and strive to create
								sites that are both visually appealing and easy to use. Whether you're looking to
								build a new website from scratch, or enhance an existing one, I'm confident that I
								can help bring your vision to life.
							</p>
							<button onClick={() => console.log('connect')}>
								Let's connect <ArrowRightCircle size={25} />
							</button>
						</div>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={headerImg} alt="Headder Img" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

/* 
<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? 'animate__animated animate__fadeIn'
											: 'animate__animated animate__fadeOut'
									}
								>
									<span className="tagline">Welcome to my portfolio site!</span>
									<h1>{`Hi I'm Konstantin`}</h1>
									<h1>
										{`-`}
										<span className="wrap"> {text}</span>
									</h1>
									<p>
										As a developer, I prioritize user experience and accessibility, and strive to
										create sites that are both visually appealing and easy to use. Whether you're
										looking to build a new website from scratch, or enhance an existing one, I'm
										confident that I can help bring your vision to life.
									</p>
									<button onClick={() => console.log('connect')}>
										Let's connect <ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
*/
