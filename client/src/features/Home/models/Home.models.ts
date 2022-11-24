export interface TopAlbum {
	preview_url: string;
	album: {
		images: [
			{
				url: string;
			}
		];
		name: string;
		artists: [
			{
				name: string;
				id: string;
			}
		];
	};
}

export interface PostToken {
	ACCESS_URL: string;
	GRANT_TYPE: string;
	access_token: string;
}

export interface GetIds {
	albums: {
		items: [
			{
				album_type: string;
				artists: [
					{
						id: string;
					}
				];
			}
		];
	};
}
