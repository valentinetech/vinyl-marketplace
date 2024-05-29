import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { SessionStorageMockTypes } from 'common/models/test.models';
import { afterEach } from 'vitest';

export let sessionStorageMock: SessionStorageMockTypes;
beforeEach(() => {
	vi.clearAllMocks();
	vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());
	vi.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => Promise.resolve());

	sessionStorageMock = {
		getItem: vi.fn(),
		setItem: vi.fn(),
		removeItem: vi.fn(),
		clear: vi.fn(),
	};
	Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });
});

afterEach(() => {
	cleanup();
	sessionStorageMock.clear();
});
