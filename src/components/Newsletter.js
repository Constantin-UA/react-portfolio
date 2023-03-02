import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
export const Newslatter = () => {
	const validationSchema = Yup.object({
		email: Yup.string().email('Вказана некорректна адреса.').required('Заповніть це поле.'),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});
	const onSubmit = (data) => console.log(data);

	return (
		<Col lg={12}>
			<div className="newsletter-bx">
				<Row>
					<Col lg={12} md={6} xl={5} className="d-flex align-items-center text-align-center">
						<h3>Contact with me</h3>
					</Col>
					<Col md={6} xl={7}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className={errors.email ? 'new-email-bx error-border' : 'new-email-bx'}>
								<input
									type="email"
									placeholder="Email Address"
									{...register('email', { required: true })}
									aria-invalid={errors.email ? 'true' : 'false'}
								/>

								<button type="submit">Submit</button>
							</div>
						</form>
					</Col>
				</Row>
			</div>
		</Col>
	);
};
