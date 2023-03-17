import { Col } from 'react-bootstrap';
export const ProjectCard = ({ title, description, imgUrl, link }) => {
	return (
		<Col sm={6} md={4}>
			<div className="proj-imgbx">
				<img src={imgUrl} alt="Alt" />
				<div className="proj-txtbx">
					<h4>{title}</h4>
					<span>{description}</span>
					<br />
					<a href={link}>visit</a>
				</div>
			</div>
		</Col>
	);
};
