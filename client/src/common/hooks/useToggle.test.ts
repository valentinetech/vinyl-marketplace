import { act, renderHook } from '@testing-library/react';
import useToggle from './useToggle';

describe('useToggle', () => {
	it('initializes state to false by default', () => {
		const { result } = renderHook(() => useToggle());

		expect(result.current[0]).toBe(false);
	});

	it('initializes state to the provided initial value', () => {
		const { result } = renderHook(() => useToggle(true));

		expect(result.current[0]).toBe(true);
	});

	it('toggles state from false to true when toggle is called', () => {
		const { result } = renderHook(() => useToggle());

		act(() => {
			result.current[1]();
		});

		expect(result.current[0]).toBe(true);
	});

	it('toggles state from true to false when toggle is called', () => {
		const { result } = renderHook(() => useToggle(true));

		act(() => {
			result.current[1]();
		});

		expect(result.current[0]).toBe(false);
	});
});
