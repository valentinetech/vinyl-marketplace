import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import useScreenSize from './useScreenSize';

describe('useScreenSize', () => {
	it('should return the initial screen size', () => {
		const { result } = renderHook(() => useScreenSize());

		expect(result.current.width).toBe(window.innerWidth);
		expect(result.current.height).toBe(window.innerHeight);
	});

	it('should update screen size on window resize', () => {
		const { result } = renderHook(() => useScreenSize());

		act(() => {
			window.innerWidth = 1024;
			window.innerHeight = 768;
			window.dispatchEvent(new Event('resize'));
		});

		expect(result.current.width).toBe(1024);
		expect(result.current.height).toBe(768);
	});

	it('should clean up event listener on unmount', () => {
		const { unmount } = renderHook(() => useScreenSize());

		const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

		unmount();

		expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
	});
});
