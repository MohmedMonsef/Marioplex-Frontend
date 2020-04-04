import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "normalize.css";
import { Server, Response } from "miragejs";

new Server({
    seeds(server) {
        server.db.loadData({
            playlist: [
                {
                    ownerId: "5e68139dbaa5a70758626553",
                    ownerName: "Amr diab",
                    ownerImages: [],
                    _id: "5e7648a37966e84270c96b48",
                    name: "sherenyat",
                    type: "playlist",
                    images: []
                }
            ],
            currentsong: {
                track: {
                    name: "You are my sunshine",
                    __v: 0,
                    albumId: "5e7d93dad82adf07f4121bb0",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    images: [],
                    duration: 236,
                    url:
                        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
                    _id: "5e7d93dad82adf07f4121bb6"
                },
                album: {
                    name: "album1",
                    _id: "5e833b412b9d7718a491c850",
                    artist: {
                        name: "ahmedsamir",
                        _id: "5e833a51a51d971174923f17"
                    }
                },
                isLiked: true,
                playlistId: "5e85f4ca1ba5cf17ccca66eb",
                isPlayable: true
            },
            queue: [
                {
                    fulltrack: {
                        track: {
                            availableMarkets: ['"er,ty,eue,euu"'],
                            _id: "5e85f4281ba5cf17ccca66dc",
                            url: "5e85f4281ba5cf17ccca66da",
                            images: [],
                            duration: 436,
                            trackNumber: 236,
                            name: '"track7"',
                            artistId: "5e833a51a51d971174923f17",
                            albumId: "5e833b412b9d7718a491c850",
                            discNumber: 1,
                            explicit: false,
                            type: "Track",
                            acousticness: 10,
                            danceability: 23,
                            energy: 100,
                            instrumentalness: 4,
                            key: 90,
                            liveness: 25,
                            loudness: 70,
                            mode: 56,
                            speechiness: 67,
                            tempo: 76,
                            timeSignature: "2020-04-02T14:18:16.464Z",
                            valence: 70,
                            like: 0,
                            __v: 0
                        },
                        isLiked: false,
                        album: {
                            name: "album1",
                            _id: "5e833b412b9d7718a491c850",
                            artist: {
                                name: "ahmedsamir",
                                _id: "5e833a51a51d971174923f17"
                            }
                        }
                    },
                    isQueue: false,
                    isPlaylist: true,
                    index: 2
                },
                {
                    fulltrack: {
                        track: {
                            availableMarkets: ['"er,ty,eue,euu"'],
                            _id: "5e85f4301ba5cf17ccca66e1",
                            url: "5e85f4301ba5cf17ccca66df",
                            images: [],
                            duration: 436,
                            trackNumber: 236,
                            name: '"track8"',
                            artistId: "5e833a51a51d971174923f17",
                            albumId: "5e833b412b9d7718a491c850",
                            discNumber: 1,
                            explicit: false,
                            type: "Track",
                            acousticness: 10,
                            danceability: 23,
                            energy: 100,
                            instrumentalness: 4,
                            key: 90,
                            liveness: 25,
                            loudness: 70,
                            mode: 56,
                            speechiness: 67,
                            tempo: 76,
                            timeSignature: "2020-04-02T14:18:24.079Z",
                            valence: 70,
                            like: 0,
                            __v: 0
                        },
                        isLiked: false,
                        album: {
                            name: "album1",
                            _id: "5e833b412b9d7718a491c850",
                            artist: {
                                name: "ahmedsamir",
                                _id: "5e833a51a51d971174923f17"
                            }
                        }
                    },
                    isQueue: false,
                    isPlaylist: true,
                    index: 3
                }
            ],
            popular_playlists: [
                {
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    title: "playlist name1",
                    des: "be happy"
                },
                {
                    image: "http://dummyimage.com/250x400.jpg/dddddd/000000",
                    title: "playlist name2",
                    des: "be happy1"
                },
                {
                    image: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    title: "playlist name3",
                    des: "be happy2"
                },
                {
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    title: "playlist name4",
                    des: "be happy3"
                },
                {
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    title: "Mood playlist name5",
                    des: "be happy4"
                }
            ],
            Playlists: [
                {
                    name: "playlist name*",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    owner: "Amr",
                    _id: "5e7d93dad82adf07f4121bac"
                },
                {
                    name: "playlist name**",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    owner: "shreen",
                    _id: "5e7d93dad82adf0ksksksksksksksk"
                },
                
            ],
            users: [
                {
                    username: "Menna",
                    email: "gmail.com",
                    password: "123",
                    country: "Egypt",
                    gender: "m",
                    birthday: "3/12/1999"
                },
                {
                    username: "Habiba",
                    email: "mm@yahoo.com",
                    password: "555",
                    country: "Egypt",
                    gender: "m",
                    birthday: "3/12/1998"
                }
            ],
            songs: [
                {
                    song_name: "First_Song",
                    artist_name: "Nora",
                    album_image: "../assets/cry.png",
                    song:
                        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    start_time: "0:00",
                    end_time: "3:45",
                    liked: false
                },
                {
                    song_name: "Second_Song",
                    artist_name: ["Bassant", "Marshmello"],
                    album_image: "../assets/cry.png",
                    song:
                        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                    start_time: "0:00",
                    end_time: "4:40",
                    liked: true
                },
                {
                    song_name: "Third_Song",
                    artist_name: ["Mona", "Nihal"],
                    album_image: "../assets/cry.png",
                    song:
                        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
                    start_time: "0:00",
                    end_time: "5:13",
                    liked: true
                },
                {
                    song_name: "Forth_Song",
                    artist_name: ["Dai", "Menna", "Nerdeen"],
                    album_image: "../assets/cry.png",
                    song:
                        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
                    start_time: "0:00",
                    end_time: "2:60",
                    liked: false
                }
            ],
            category: [
                {
                    name: "pop",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    categoryId: "123"
                },
                {
                    name: "roke",
                    images: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    categoryId: "123"
                },
                {
                    name: "rab",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    categoryId: "123"
                },
                {
                    name: "sad",
                    images: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    categoryId: "123"
                },
                {
                    name: "happy",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    categoryId: "123"
                },
                {
                    name: "pop",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    categoryId: "123"
                },
                {
                    name: "roke",
                    images: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    categoryId: "123"
                },
                {
                    name: "rab",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    categoryId: "123"
                },
                {
                    name: "sad",
                    images: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    categoryId: "123"
                },
                {
                    name: "happy",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    categoryId: "123"
                }
            ],
            artist: [
                {
                    name: "akram",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    type: "artist"
                },
                {
                    name: "tamer",
                    image: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    href: "",
                    type: "artist"
                },
                {
                    name: "eslam",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    type: "artist"
                },
                {
                    name: "ali",
                    image: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    href: "",
                    type: "artist"
                },
                {
                    name: "amr",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    type: "artist"
                },
                {
                    name: "ahmed",
                    image: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    href: "",
                    type: "artist"
                }
            ],
            user_albums: [
                {
                  _id: "5e7d93daddf07f4121bac",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "album name1",
                    artistName: "artist name1",
                    artistId: 1
                },
                {
                  _id: "5e7d93daddf07f4121bac",
                    images: "http://dummyimage.com/250x400.jpg/dddddd/000000",
                    name: "album name2",
                    artistName: "artist name2",
                    artistId: 2
                    
                },
                {
                  _id: "5e7d93daddf07f4121bac",
                    images: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    name: "album name3",
                    artistName: "artist name3",
                    artistId: 3
                },
                {
                  _id: "5e7d93daddf07f4121bac",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "album name4",
                    artistName: "artist name4",
                    artistId: 4
                    
                },
                {
                  _id: "5e7d93daddf07f4121bac",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "album name5",
                    artistName: "artist name5",
                    artistId: 5
                    
                },
                {
                  _id: "5e7d93daddf07f4121bac",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "album name6",
                    artistName: "artist name6",
                    artistId: 6
                    
                }
            ],
            user_artists: [
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    Name: "artist name1"
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/dddddd/000000",
                    Name: "artist name2"
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/cc0000/ffffff",
                    Name: "artist name3"
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    Name: "artist name4"
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    Name: "artist name5"
                },
                {
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    Name: "artist name6"
                }
            ],
            playlist_info: [
              {
                _id: "5e7d93dad82adf07f4121bac",
                type: "playlist",
                name: "dhjgjdjdjg",
                like: "true",
                ownerId: "5e7d9045854b0419f4f409b7",
                ownerName: "Nihal Mansour",
                collaborative: false,
                isPublic: true,
                images: ["https://dummyimage.com/250x400.jpg/ff4444/ffffff"],
                tracks: [
                  {
                    trackid: "5e7d93dad82adf07f4121bb5",
                    name: "track2",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121baf",
                    albumName: "album2"
                  },
                  {
                    trackid: "5e7d93dad82adf07f4121bb7",
                    name: "track4",
                    artistId: "5e7d93dad82adf07f4121bb3",
                    artistName: "artist4",
                    albumId: "5e7d93dad82adf07f4121bb1",
                    albumName: "album4"
                  },
                  {
                    trackid: "5e7d93dad82adf07f4121bb6",
                    name: "track3",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121bb0",
                    albumName: "album3"
                  },
                  {
                    trackid: "5e7d93dad82adf07f4121bb4",
                    name: "track1",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121bae",
                    albumName: "album1"
                  },
                  {
                    trackid: "5e7d93dad82adf07f4b5",
                    name: "track2",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121baf",
                    albumName: "album2"
                  },
                  {
                    trackid: "5e7dad82adf07f4121bb7",
                    name: "track4",
                    artistId: "5e7d93dad82adf07f4121bb3",
                    artistName: "artist4",
                    albumId: "5e7d93dad82adf07f4121bb1",
                    albumName: "album4"
                  },
                  {
                    trackid: "5e7d93dad82adf0721bb6",
                    name: "track3",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121bb0",
                    albumName: "album3"
                  },
                  {
                    trackid: "5e7d93dad8207f4121bb4",
                    name: "track1",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121bae",
                    albumName: "album1"
                  }
                ]
              },
              {
                _id: "5e7d93dad82adf0ksksksksksksksk",
                type: "playlist",
                name: "dhjgjdjdjg",
                like: "false",
                ownerId: "5e7d9045854b0419f4f409b7",
                collaborative: false,
                isPublic: true,
                images: [],
                tracks: []
              }
            ],
            album_info: [
              {
                _id: "5e7d93daddf07f4121bac",
                type: "playlist",
                name: "This is an Album",
                like: "true",
                artist: "Nihal Mansour",
                collaborative: false,
                isPublic: true,
                images: ["https://dummyimage.com/250x400.jpg/ff4444/ffffff"],
                tracks: [
                  {
                    trackid: "5e7d93dad82adf07f4121bb5",
                    name: "track2",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121baf",
                    albumName: "album2"
                  },
                  {
                    trackid: "5e7d93dad82adf07f4121bb4",
                    name: "track1",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121bae",
                    albumName: "album1"
                  },
                  {
                    trackid: "5e7d93dad82adf07f4b5",
                    name: "track2",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121baf",
                    albumName: "album2"
                  },
                  {
                    trackid: "5e7dad82adf07f4121bb7",
                    name: "track4",
                    artistId: "5e7d93dad82adf07f4121bb3",
                    artistName: "artist4",
                    albumId: "5e7d93dad82adf07f4121bb1",
                    albumName: "album4"
                  },
                  {
                    trackid: "5e7d93dad82adf0721bb6",
                    name: "track3",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121bb0",
                    albumName: "album3"
                  },
                  {
                    trackid: "5e7d93dad8207f4121bb4",
                    name: "track1",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artistName: "artist1",
                    albumId: "5e7d93dad82adf07f4121bae",
                    albumName: "album1"
                  }
                ]
              }
            ],
            likedtracks: {
              ownerName: "Nihal Mansour",
              tracks: [
                {
                  trackid: "5e7d93dad82adf07f4121bb5",
                  name: "track2",
                  artistId: "5e7d93dad82adf07f4121bb2",
                  artistName: "artist1",
                  albumId: "5e7d93dad82adf07f4121baf",
                  albumName: "album2"
                },
                {
                  trackid: "5e7d93dad82adf07f4121bb4",
                  name: "track1",
                  artistId: "5e7d93dad82adf07f4121bb2",
                  artistName: "artist1",
                  albumId: "5e7d93dad82adf07f4121bae",
                  albumName: "album1"
                },
                {
                  trackid: "5e7d93dad8207f4121bb4",
                  name: "track1",
                  artistId: "5e7d93dad82adf07f4121bb2",
                  artistName: "artist1",
                  albumId: "5e7d93dad82adf07f4121bae",
                  albumName: "album1"
                }
              ]
            },
            nextsong: {
                track: {
                    name: "You are my x",
                    __v: 0,
                    albumId: "5e7d93dad82adf07f4121bb1",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artists: ["civil wars", "john", "jasmine"],
                    length: "3:33",
                    url:
                        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    _id: "5e7d93dad82adf07f4121bb7"
                },
                albumName: "Barton Hallow",
                isLiked: false,
                isPlayable: true
            },
            prevsong: {
                track: {
                    name: "You are my y",
                    __v: 0,
                    albumId: "5e7d93dad82adf07f4121baf",
                    artistId: "5e7d93dad82adf07f4121bb2",
                    artists: ["civil wars", "john", "jasmine"],
                    length: "3:33",
                    url:
                        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                    _id: "5e7d93dad82adf07f4121bb5"
                },
                albumName: "Barton Hallow",
                isLiked: true,
                isPlayable: true
            },
            user_songs: [
              {
                name: "ya sattar",
                artistName: "Hamaki"
                
              },
              {
                name: "nour el3en",
                artistName: "Amr Diab"
                
              },
              {
                name: "el nas",
                artistName: "Hamaki"
                
              },
              {
                name: "el nas",
                artistName: "Hamaki"
                
              },
              {
                name: "el nas",
                artistName: "Hamaki"
      
              },
              {
                name: "el nas",
                artistName: "Hamaki"
                
              },
              {
                name: "el nas",
                artistName: "Hamaki"
                
              },
              {
                name: "el nas",
                artistName: "Hamaki"
              
              },
              {
                name: "el nas",
                artistName: "Hamaki"
                
              }
            ],
            Artist_Songs: [
                {
                    URL: "",
                    Name: "",
                    TrackNumber: "",
                    PreviewURL: "",
                    AvailableMarket: ""
                }
            ],
            search_artist: [
                {
                    _id: "5e76461b7ee20d39b463988c",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "this is Amr diab",
                    type: "Artist",
                    genre: ["pop"]
                }
            ],
            search_album: [
                {
                    _id: "5e764ab5eaa4533e7869d026",
                    name: "diabiat",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    artistId: "5e76461b7ee20d39b463988c",
                    artistName: "this is Amr diab"
                }
            ],
            search_playlist: [
                {
                    _id: "5e7d93dad82adf0ksksksksksksksk",
                    name: "Amr diab",
                    type: "function String() { [native code] }",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    ownerId: "5e695daf488e9342b8b18bcf",
                    ownerName: "dina"
                }
            ],
            search_top: [
                {
                    _id: "5e76461b7ee20d39b463988c",
                    images: "http://dummyimage.com/250x400.jpg/ff4444/ffffff",
                    name: "Amr diab",
                    type: "Artist",
                    genre: ["pop"]
                }
            ]
        });
    },
    routes() {
        // this.get("/api/users", (schema, request)=>{
        //   const user =JSON.parse(request.requestBody).data;
        //   return new Response(
        //     201,
        //     {token:'dai'},
        //     {user: schema.db.user_play_lists.findBy({name: user.name})}
        //   )

        // }
        // );

        // this.get("/api/users", (schema)=>{
        //   return schema.db.user_play_lists
        // });
        this.get("/api/artist/:id", schema => {
            return schema.db.artist;
        });
        this.get("/api/category", schema => {
            console.log("in mirage", schema.db.category);
            return schema.db.category;
        });
        this.get("/api/player/currently-playing", schema => {
            return schema.db.songs;
        });
        this.get("/api/player/play", schema => {
            return schema.db.songs;
        });
        this.get("/api/player/pause", schema => {
            return schema.db.songs;
        });
        this.get("/player/next", schema => {
            return new Response(200, {}, { nextsong: schema.db.nextsong });
        });
        this.get("/player/previous", schema => {
            return new Response(200, {}, { prevsong: schema.db.prevsong });
        });
        this.get("/api/player/repeat", schema => {
            return schema.db.songs;
        });
        this.put("/api/player/shuffle", schema => {
            return schema.db.songs;
        });
        this.get("/api/user", schema => {
            return schema.db.popular_playlists;
        });
        this.get("/api/playlists", schema => {
            console.log("in get", schema.db.Playlists);
            return schema.db.Playlists;
        }),
            this.delete("/api/playlist/:id", (schema, request) => {
                let id = request.params.id;
                return schema.db.Playlists.remove(id);
            }),
            this.post("/api/playlists", (schema, request) => {
                const cplaylist = JSON.parse(request.requestBody).data;
                console.log(cplaylist.playlistname, "in mirag");
                return new Response(
                    200,
                    {},
                    { Playlists: schema.db.Playlists.insert(cplaylist) }
                );
            });
        this.post("/api/signup", (schema, request) => {
            const user = JSON.parse(request.requestBody).data;
            if (schema.db.users.findBy({ email: user.email }) == null) {
                return new Response(
                    201,
                    {
                        token: "menna"
                    },
                    schema.db.users.insert({
                        username: user.username,
                        email: user.email,
                        password: user.password
                    })
                );
            } else {
                return new Response(403, { error: "email not unique" });
            }
        });
        this.post("/api/login", (schema, request) => {
            const user = JSON.parse(request.requestBody).data;
            if (
                schema.db.users.findBy({ email: user.email }) != null &&
                schema.db.users.findBy({ password: user.password }) != null
            ) {
                console.log(
                    "in main",
                    schema.db.users.findBy({ email: user.email })
                );
                return new Response(
                    201,
                    { token: "menna" },
                    { user: schema.db.users.findBy({ email: user.email }) }
                );
            } else {
                return new Response(403, { error: "no user with such data" });
            }
        });
        this.post("/api/reset", () => {
            return new Response(200);
        });
        this.post("/api/logout", () => {
            return new Response(200);
        });
        this.get("/api/me/albums", schema => {
          return schema.db.user_albums;
        });
        this.get("/api/me/followingArtist", schema => {
          return schema.db.user_artists;
        });
        this.get("/api/me/tracks", schema => {
          return schema.db.user_songs;
        });
        this.get("/api/me/like", schema => {
            return schema.db.songs;
        });
        this.get("/api/me/unlike", schema => {
            return schema.db.songs;
        });
        this.post("/api/uploadsong", (schema, request) => {
            const uploadedsong = JSON.parse(request.requestBody).data;
            console.log(uploadedsong, "in mirag");
            return schema.db.Artist_Songs.insert({
                URL: uploadedsong.URL,
                Name: uploadedsong.Name,
                TrackNumber: uploadedsong.TrackNumber,
                PreviewURL: uploadedsong.PreviewURL,
                AvailableMarket: uploadedsong.AvailableMarket
            });
        });
        this.put("/api/claimartist", (schema, request) => {
            const claimartist = JSON.parse(request.requestBody).data;
            console.log(claimartist.Name, "in mirage");
            console.log("artist id", claimartist.id);
            return new Response(
                200,
                {},
                schema.db.users.update({
                    Name: claimartist.Name,
                    Genre: claimartist.Genre,
                    Description: claimartist.Description
                })
            );
        });
        this.delete("/api/song/:id", (schema, request) => {
            let id = request.params.id;
            return schema.db.Artist_Songs.remove(id);
            // let headers = {};
            // let data = { errors: ["Server did not respond"] };
            // return new Response(500, headers, data);
        });
        this.post("/api/playlists", (schema, request) => {
            const cplaylist = JSON.parse(request.requestBody).data;
            console.log(cplaylist.playlistname, "in mirag");
            return new Response(
                200,
                {},
                { Playlists: schema.db.Playlists.insert(cplaylist) }
            );
        });
        this.post("/api/uploadsong", (schema, request) => {
          const uploadedsong = JSON.parse(request.requestBody).data;
          console.log(uploadedsong, "in mirag");
          return schema.db.Artist_Songs.insert({
            URL: uploadedsong.URL,
            Name: uploadedsong.Name,
            TrackNumber: uploadedsong.TrackNumber,
            PreviewURL: uploadedsong.PreviewURL,
            AvailableMarket: uploadedsong.AvailableMarket
          });
        });
        this.put("/api/claimartist", (schema, request) => {
          const claimartist = JSON.parse(request.requestBody).data;
          console.log(claimartist.Name, "in mirage");
          console.log("artist id", claimartist.id);
        });
         
        //authentication requests
        this.post("/api/signup", (schema, request) => {
            const user = JSON.parse(request.requestBody).data;
            if (schema.db.users.findBy({ email: user.email }) == null) {
                return new Response(
                    201,
                    {
                        token: "menna"
                    },
                    schema.db.users.insert({
                        username: user.username,
                        email: user.email,
                        password: user.password
                    })
                );
            } else {
                return new Response(403, { error: "email not unique" });
            }
        });
        this.post("/api/login", (schema, request) => {
            const user = JSON.parse(request.requestBody).data;
            if (
                schema.db.users.findBy({ email: user.email }) != null &&
                schema.db.users.findBy({ password: user.password }) != null
            ) {
                console.log(
                    "in main",
                    schema.db.users.findBy({ email: user.email })
                );
                return new Response(
                    201,
                    { token: "menna" },
                    { user: schema.db.users.findBy({ email: user.email }) }
                );
            } else {
                return new Response(403, { error: "no user with such data" });
            }
        });
        this.get("/api/getuser", schema => {
            return new Response(
                201,
                { token: "menna" },
                { user: schema.db.users.findBy({ email: "mm@yahoo.com" }) }
            );

            // return new Response(403, { error: "no user with such data" });
        });

        this.post("/api/reset", () => {
            return new Response(200);
        });
        this.post("/api/logout", () => {
            return new Response(200);
        });
        //albums
        this.get("/api/me/albums", schema => {
            return schema.db.user_albums;
        });
        this.get("/api/me/following", schema => {
            console.log("in main dai");
            return schema.db.user_artists;
        });
        // this.get("/api/users", (schema)=>{
        //   return schema.db.user_play_lists
        // });
        //albums
        this.get("/api/me/like", schema => {
            return schema.db.songs;
        });
        this.get("/api/me/unlike", schema => {
            return schema.db.songs;
        });
        ///////////////////////////////////////////////////queue requests

        //queue requests
        this.get("/api/currentsong", schema => {
            return new Response(
                200,
                {},
                { currentsong: schema.db.currentsong }
            );
        });
        this.get("/api/queue", schema => {
            return new Response(200, {}, { queue: schema.db.queue });
        });
        this.post("/api/addtoqueue", (schema, request) => {
            const songid = JSON.parse(request.requestBody).data;
            console.log(songid);
            let song = schema.db.queue.findBy({ _id: songid.song_id });
            song.isqueue = true;
            song.id = schema.db.queue.length + 1;
            console.log("adding song to queue in mirage", song);
            schema.db.queue.insert(song);
            console.log("queue in mirage", schema.db.queue);
            return new Response(200, {}, { queue: schema.db.queue });
        });
        //////////////////////////////////////////////////Playlists
        this.get("/playlists/:playlist_id", (schema, request) => {
            let id = request.params.playlist_id;
            return new Response(
                200,
                {},
                { Playlist: schema.db.playlist_info.findBy({ _id: id }) }
            );
        });
        ////////////////////////////////////////////////CreateQueue
        this.post("/createQueue/:playlist_id/:trackId", () => {
            return new Response(200, {}, { mes: "created with success" });
        });
        //////
        this.get("/api/search/top", schema => {
            return schema.db.search_top;
        });
        this.get("/api/search/artist", schema => {
            return schema.db.search_artist;
        });
        this.get("/api/search/album", schema => {
            return schema.db.search_album;
        });
        this.get("/api/search/playlist", schema => {
            return schema.db.search_playlist;
        });
        /////////////////
        this.get("/playlists/:playlist_id", (schema, request) => {
          let id = request.params.playlist_id;
          return schema.db.playlist_info.findBy({ _id: id });
        });
    
        this.put("/playlists/:playlist_id/followers", (schema, request) => {
          let id = request.params.playlist_id;
          return schema.db.playlist_info.findBy({ _id: id });
        });
        this.delete("/playlists/:playlist_id/followers", (schema, request) => {
          let id = request.params.playlist_id;
          return schema.db.playlist_info.findBy({ _id: id });
        });
    
        ////////////////////////////albums
    
        this.get("/albums/:album_id", (schema, request) => {
          let id = request.params.album_id;
          return schema.db.album_info.findBy({ _id: id });
        });
    
        this.put("/me/:album_id", (schema, request) => {
          let id = request.params.album_id;
          return schema.db.album_info.findBy({ _id: id });
        });
        this.delete("/me/:album_id", (schema, request) => {
          let id = request.params.album_id;
          return schema.db.album_info.findBy({ _id: id });
        });
        //////////////////liked tracks
        this.get("/me/tracks", schema => {
          return schema.db.likedtracks;
        });
        this.post("playlists/:playlist_id/tracks", (schema, request) => {
          const tracks = JSON.parse(request.requestBody).data;
          console.log(tracks, "in mirag");
          return new Response(
            200,
            {},
            { Playlists: schema.db.songs.insert(tracks) }
          );
        });
        this.get("/api/me/playlists", schema => {
          console.log("in get", schema.db.Playlists);
          return schema.db.Playlists;
        });
        
    }
});
Vue.config.productionTip = false;

Vue.prototype.$http = axios;
//we can do this.$http and it will be like calling axios directly
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["x-auth-token"] = token;
}
//setting the Authorization on axios header to our token, so requests can be processed if a token is required.
// This way, we do not have to set token anytime we want to make a request.

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");