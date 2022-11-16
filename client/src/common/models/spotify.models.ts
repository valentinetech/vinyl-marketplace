export interface IAlbumQuery {
	albums: IAlbums;
}
export interface IAlbums {
	items: IAlbum[];
}
export interface IAlbum {
	album_type: 'album';
	artists: IArtist[];
}
export interface IArtist {
	id: string;
	name: string;
}
