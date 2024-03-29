import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

import projImg1 from '../assets/img/proj/alfa.webp';
import projImg3 from '../assets/img/proj/roam.webp';
import projImg4 from '../assets/img/proj/ai.webp';
import projImg5 from '../assets/img/proj/ipfind.webp';
import projImg6 from '../assets/img/proj/coffe.webp';
import projImg2 from '../assets/img/proj/richS.webp';
import projImg7 from '../assets/img/proj/skgranite.webp';
import colorSharp2 from '../assets/img/color-sharp2.webp';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
	const projects = [
		{
			title: 'Design dev',
			description: 'Where art meets design. ',
			imgUrl: projImg1,
			link: 'https://constantin-ua.github.io/',
		},
		{
			title: 'ROAMWELL TRAVEL CO.',
			description: 'WHERE EVERY JOURNEY IS A STORY WORTH TELLING',
			imgUrl: projImg3,
			link: 'https://constantin-ua.github.io/',
		},
		{
			title: 'Power of AI',
			description: "Here, we're passionate about all things AI.",
			imgUrl: projImg4,
			link: 'https://constantin-ua.github.io/',
		},
		{
			title: 'IP Address Tracker',
			description: 'Do you want to know where one or the other IP is located?',
			imgUrl: projImg5,
			link: 'https://constantin-ua.github.io/',
		},
		{
			title: 'COFFE SHOP',
			description: 'SO, YOU WANT COFFE?',
			imgUrl: projImg6,
			link: 'https://constantin-ua.github.io/',
		},
		{
			title: 'RICH STONE',
			description: `
			- Kitchen countertops with natural stone`,
			imgUrl: projImg2,
			link: 'https://rich-stone.dp.ua/',
		},
		{
			title: 'SK GRANITE',
			description: 'Installation of a tombstone in the place of rest of a person.',
			imgUrl: projImg7,
			link: 'https://sk-granite.dp.ua/',
		},
	];
	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? 'animate__animated animate__fadeIn'
											: 'animate__animated animate__fadeOut'
									}
								>
									<h2>Projects</h2>
									<p>
										In my portfolio, you'll find examples of my work, including websites that I've
										built for clients in a variety of industries. From responsive design to
										interactive features, I'm skilled in a range of front-end technologies,
										including HTML, CSS, JavaScript, and more.
									</p>
								</div>
							)}
						</TrackVisibility>
						<Tab.Container id="project-tabs" defaultActiveKey="first">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center align-items-center"
								id="pills-tab"
							>
								<Nav.Item>
									<Nav.Link eventKey="first">One</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Two</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Three</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										{projects.map((project, index) => {
											return index <= 2 ? <ProjectCard key={index} {...project} /> : null;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row>
										{projects.map((project, index) => {
											return index >= 3 && index <= 5 ? (
												<ProjectCard key={index} {...project} />
											) : null;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<Row>
										{projects.map((project, index) => {
											return index >= 6 ? <ProjectCard key={index} {...project} /> : null;
										})}
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2} alt="Alt bg" />
		</section>
	);
};
