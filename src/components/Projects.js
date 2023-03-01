import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

import projImg1 from '../assets/img/proj/1.png';
import projImg2 from '../assets/img/proj/2.png';
import projImg3 from '../assets/img/proj/3.png';
import projImg4 from '../assets/img/proj/4.png';
import projImg5 from '../assets/img/proj/5.png';
import projImg6 from '../assets/img/proj/6.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
	const projects = [
		{
			title: 'ROAMWELL TRAVEL CO.',
			description: 'WHERE EVERY JOURNEY IS A STORY WORTH TELLING',
			imgUrl: projImg1,
		},
		{
			title: 'SPACE TRAVEL',
			description: 'SO, YOU WANT TO TRAVEL TO SPACE?',
			imgUrl: projImg2,
		},
		{
			title: 'Creative Catalyst',
			description:
				"Where art meets design. From logo and branding design to web design, packaging, and more, Creative Catalyst is passionate about crafting designs that effectively communicate our clients' unique stories and personalities. With a focus on quality and creativity, we strive to make a positive impact on the world, one design at a time.",
			imgUrl: projImg3,
		},
		{
			title: 'IP Address Tracker',
			description: 'Do you want to know where one or the other IP is located?',
			imgUrl: projImg4,
		},
		{
			title: 'Sunnyside',
			description:
				'Transform your brand. Stand out to the right audience. Graphic design. Photography.',
			imgUrl: projImg5,
		},
		{
			title: 'Power of AI',
			description:
				"Here, we're passionate about all things AI. Whether you're a newcomer to the field or a seasoned expert, we have everything you need to learn more about this exciting and rapidly-evolving technology.",
			imgUrl: projImg6,
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
											? 'animate__animated animate__slideInUp'
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
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
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
