import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact 1.svg';

export const Contact = () => {
	const validationSchema = Yup.object({
		firstName: Yup.string()
			.min(3, 'Потрібно вказати більше 3 символів.')
			.required('Заповніть це поле.'),

		lastName: Yup.string()
			.min(3, 'Потрібно вказати більше 3 символів.')
			.required('Заповніть це поле.'),

		email: Yup.string().email('Вказана некорректна адреса.').required('Заповніть це поле.'),

		phone: Yup.number().min(5, 'Не меншьше 5  символів.').required('Заповніть це поле.'),
		textarea: Yup.string().min(10, 'Потрібно вказати більше 10 символів.'),
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
		<section className="contact" id="contact">
			<Container>
				<Row className="align-items-center">
					<Col md={6}>
						<img src={contactImg} alt="Contact Us" />
					</Col>
					<Col md={6}>
						<h2>Get in Touch</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Row>
								<Col sm={6} className="px-1 text-align-center">
									<input
										{...register('firstName', { required: true, minLength: 4 })}
										aria-invalid={errors.firstName ? 'true' : 'false'}
										placeholder="First Name"
									/>
									{errors.firstName && <p role="alert">{errors.firstName?.message}</p>}
								</Col>
								<Col sm={6} className="px-1">
									<input {...register('lastName', { required: true })} placeholder="Last Name" />
									{errors.lastName && <p role="alert">{errors.lastName?.message}</p>}
								</Col>
								<Col sm={6} className="px-1">
									<input {...register('email', { required: true })} placeholder="Email Address" />
									{errors.email && <p role="alert">{errors.email?.message}</p>}
								</Col>
								<Col sm={6} className="px-1">
									<input
										className={errors.phone ? 'error-border' : null}
										{...register('phone')}
										placeholder="Phone No."
									/>
								</Col>
								<Col className="px-1">
									<textarea row="6" {...register('textarea')} placeholder="Message" />
									{errors.phone && <p role="alert">{errors.textarea?.message}</p>}

									<button type="submit">
										<span>Send</span>
									</button>
								</Col>
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
