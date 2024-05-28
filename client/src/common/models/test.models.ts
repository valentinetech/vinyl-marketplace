export interface SessionStorageMockTypes {
	getItem: ReturnType<typeof vi.fn>;
	setItem: ReturnType<typeof vi.fn>;
	removeItem: ReturnType<typeof vi.fn>;
	clear: ReturnType<typeof vi.fn>;
}
