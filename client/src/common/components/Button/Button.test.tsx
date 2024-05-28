import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
	it('should render primary button', () => {
		const children = 'test';
		const button = render(<Button variant="primary">{children}</Button>).getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('test');
		expect(button).not.toBeDisabled();
	});
	it('should render primary button disabled', () => {
		const children = 'test';
		const button = render(
			<Button variant="primary" disabled>
				{children}
			</Button>,
		).getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('test');
		expect(button).toBeDisabled();
	});
	it('should render primary button other props', () => {
		const children = 'test';
		const button = render(
			<Button variant="primary" about="def" disabled>
				{children}
			</Button>,
		).getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('test');
		expect(button).toHaveAttribute('about', 'def');
		expect(button).toBeDisabled();
	});
	it('should render secondary button', () => {
		const children = 'test';
		const button = render(<Button variant="secondary">{children}</Button>).getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('test');
		expect(button).not.toBeDisabled();
	});
	it('should render secondary button disabled', () => {
		const children = 'test';
		const button = render(
			<Button variant="secondary" disabled>
				{children}
			</Button>,
		).getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('test');
		expect(button).toBeDisabled();
	});
	it('should render secondary button other props', () => {
		const children = 'test';
		const button = render(
			<Button variant="secondary" about="def" disabled>
				{children}
			</Button>,
		).getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('test');
		expect(button).toHaveAttribute('about', 'def');
		expect(button).toBeDisabled();
	});
});
