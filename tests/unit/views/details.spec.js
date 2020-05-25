import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Details from '../../../src/views/Details.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';

describe('In Show Card Component', () => {
    let wrapper;
    let router = new VueRouter({ routes });
    let data = {
        "id": 123,
        "url": "http://www.tvmaze.com/shows/123/lost",
        "name": "Lost",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Adventure",
            "Supernatural"
        ],
        "status": "Ended",
        "runtime": 60,
        "premiered": "2004-09-22",
        "officialSite": "http://abc.go.com/shows/lost",
        "schedule": {
            "time": "21:00",
            "days": [
                "Tuesday"
            ]
        },
        "rating": {
            "average": 8.4
        },
        "weight": 94,
        "network": {
            "id": 3,
            "name": "ABC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            }
        },
        "webChannel": null,
        "externals": {
            "tvrage": 4284,
            "thetvdb": 73739,
            "imdb": "tt0411008"
        },
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1389.jpg"
        },
        "summary": "<p>Out of the blackness, the first thing Jack senses is pain. Then burning sun. A Bamboo forest. Smoke. Screams. With a rush comes the horrible awareness that the plane he was on tore apart in mid-air and crashed on a Pacific island. From there it's a blur, as his doctor's instinct kicks in: people need his help.</p><p>Stripped of everything, the 48 survivors scavenge what they can from the plane for their survival. Some panic. Some pin their hopes on rescue. A few find inner strength they never knew they had -- like Kate, who, with no medical training, suddenly finds herself suturing the doctor's wounds. Hurley - a man with a warm sense of humor despite the desperate situation - does his best to keep his cool as he helps those around him to survive. Charlie is a faded rock star who harbors a painful secret. Sayid is a Middle Eastern man who must wrestle with the racial profiling directed at him by some of his fellow survivors. Jin and Sun are a Korean couple whose traditions, values and language are foreign, and thus causes much to get lost in the translation. Sawyer has an air of danger surrounding him, and his intense sense of mistrust for everyone around him could prove to be fatal to his fellow castaways. Michael has just gained custody of his nine-year-old son, Walt, after the death of his ex-wife - they are a father and son who don't even know each other. Locke is a mysterious man who keeps to himself, and who harbors a deeper connection to the island than any of the others. Self-centered Shannon - who actually gives herself a pedicure amid the chaos - and her estranged controlling brother, Boone , constantly bicker and must learn to get along if they are to survive. And young Claire is eight months pregnant and ill-prepared for the hardships of motherhood - especially on a deserted island.</p>",
        "updated": 1588958098,
        "_links": {
            "self": {
                "href": "http://api.tvmaze.com/shows/123"
            },
            "previousepisode": {
                "href": "http://api.tvmaze.com/episodes/10260"
            }
        },
        "_embedded": {
            "cast": [
                {
                    "person": {
                        "id": 26406,
                        "url": "http://www.tvmaze.com/people/26406/matthew-fox",
                        "name": "Matthew Fox",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1966-07-14",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/2384.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/2384.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/26406"
                            }
                        }
                    },
                    "character": {
                        "id": 34808,
                        "url": "http://www.tvmaze.com/characters/34808/lost-dr-jack-shephard",
                        "name": "Dr. Jack Shephard",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1390.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1390.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34808"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 26407,
                        "url": "http://www.tvmaze.com/people/26407/evangeline-lilly",
                        "name": "Evangeline Lilly",
                        "country": {
                            "name": "Canada",
                            "code": "CA",
                            "timezone": "America/Halifax"
                        },
                        "birthday": "1979-08-03",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/3/8772.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/3/8772.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/26407"
                            }
                        }
                    },
                    "character": {
                        "id": 34811,
                        "url": "http://www.tvmaze.com/characters/34811/lost-katherine-kate-austen",
                        "name": "Katherine \"Kate\" Austen",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1392.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1392.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34811"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 3233,
                        "url": "http://www.tvmaze.com/people/3233/jorge-garcia",
                        "name": "Jorge Garcia",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1973-04-28",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/1/4599.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/4599.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/3233"
                            }
                        }
                    },
                    "character": {
                        "id": 34813,
                        "url": "http://www.tvmaze.com/characters/34813/lost-hugo-hurley-reyes",
                        "name": "Hugo \"Hurley\" Reyes",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1397.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1397.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34813"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 8389,
                        "url": "http://www.tvmaze.com/people/8389/josh-holloway",
                        "name": "Josh Holloway",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1969-07-20",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/162/406159.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/162/406159.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/8389"
                            }
                        }
                    },
                    "character": {
                        "id": 34810,
                        "url": "http://www.tvmaze.com/characters/34810/lost-james-sawyer-ford",
                        "name": "James \"Sawyer\" Ford",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1396.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1396.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34810"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 5312,
                        "url": "http://www.tvmaze.com/people/5312/terry-oquinn",
                        "name": "Terry O'Quinn",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1952-07-15",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/44/110128.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/44/110128.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/5312"
                            }
                        }
                    },
                    "character": {
                        "id": 34809,
                        "url": "http://www.tvmaze.com/characters/34809/lost-john-locke",
                        "name": "John Locke",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1391.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1391.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34809"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 4973,
                        "url": "http://www.tvmaze.com/people/4973/naveen-andrews",
                        "name": "Naveen Andrews",
                        "country": {
                            "name": "United Kingdom",
                            "code": "GB",
                            "timezone": "Europe/London"
                        },
                        "birthday": "1969-01-17",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/3/8432.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/3/8432.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/4973"
                            }
                        }
                    },
                    "character": {
                        "id": 34812,
                        "url": "http://www.tvmaze.com/characters/34812/lost-sayid-jarrah",
                        "name": "Sayid Jarrah",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1393.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1393.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34812"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 5025,
                        "url": "http://www.tvmaze.com/people/5025/daniel-dae-kim",
                        "name": "Daniel Dae Kim",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1968-08-04",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1131.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1131.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/5025"
                            }
                        }
                    },
                    "character": {
                        "id": 34815,
                        "url": "http://www.tvmaze.com/characters/34815/lost-jin-soo-kwon",
                        "name": "Jin Soo Kwon",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1394.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1394.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34815"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 215755,
                        "url": "http://www.tvmaze.com/people/215755/kim-yoon-jin",
                        "name": "Kim Yoon Jin",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1973-11-07",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/168/420190.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/168/420190.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/215755"
                            }
                        }
                    },
                    "character": {
                        "id": 34814,
                        "url": "http://www.tvmaze.com/characters/34814/lost-sun-hwa-kwon",
                        "name": "Sun Hwa Kwon",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1395.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1395.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34814"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 2914,
                        "url": "http://www.tvmaze.com/people/2914/emilie-de-ravin",
                        "name": "Emilie de Ravin",
                        "country": {
                            "name": "Australia",
                            "code": "AU",
                            "timezone": "Australia/Sydney"
                        },
                        "birthday": "1981-12-27",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/163/408132.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/163/408132.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/2914"
                            }
                        }
                    },
                    "character": {
                        "id": 34817,
                        "url": "http://www.tvmaze.com/characters/34817/lost-claire-littleton",
                        "name": "Claire Littleton",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1402.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1402.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34817"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 26409,
                        "url": "http://www.tvmaze.com/people/26409/dominic-monaghan",
                        "name": "Dominic Monaghan",
                        "country": {
                            "name": "Germany",
                            "code": "DE",
                            "timezone": "Europe/Busingen"
                        },
                        "birthday": "1976-12-08",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/3/8773.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/3/8773.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/26409"
                            }
                        }
                    },
                    "character": {
                        "id": 34816,
                        "url": "http://www.tvmaze.com/characters/34816/lost-charlie-pace",
                        "name": "Charlie Pace",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1401.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1401.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34816"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 93,
                        "url": "http://www.tvmaze.com/people/93/michael-emerson",
                        "name": "Michael Emerson",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1954-09-07",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/2/6590.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/2/6590.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/93"
                            }
                        }
                    },
                    "character": {
                        "id": 34818,
                        "url": "http://www.tvmaze.com/characters/34818/lost-ben-linus",
                        "name": "Ben Linus",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1400.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1400.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34818"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 2706,
                        "url": "http://www.tvmaze.com/people/2706/harold-perrineau",
                        "name": "Harold Perrineau",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1963-08-07",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/89/222524.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/89/222524.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/2706"
                            }
                        }
                    },
                    "character": {
                        "id": 34821,
                        "url": "http://www.tvmaze.com/characters/34821/lost-michael-dawson",
                        "name": "Michael Dawson",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1425.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1425.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34821"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 19717,
                        "url": "http://www.tvmaze.com/people/19717/elizabeth-mitchell",
                        "name": "Elizabeth Mitchell",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1970-03-27",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/153/382856.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/153/382856.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/19717"
                            }
                        }
                    },
                    "character": {
                        "id": 34820,
                        "url": "http://www.tvmaze.com/characters/34820/lost-juliet-burke",
                        "name": "Juliet Burke",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1398.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1398.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34820"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 789,
                        "url": "http://www.tvmaze.com/people/789/henry-ian-cusick",
                        "name": "Henry Ian Cusick",
                        "country": {
                            "name": "Peru",
                            "code": "PE",
                            "timezone": "America/Lima"
                        },
                        "birthday": "1967-04-17",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/150/376197.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/150/376197.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/789"
                            }
                        }
                    },
                    "character": {
                        "id": 34819,
                        "url": "http://www.tvmaze.com/characters/34819/lost-desmond-hume",
                        "name": "Desmond Hume",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1399.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1399.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34819"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 20429,
                        "url": "http://www.tvmaze.com/people/20429/ken-leung",
                        "name": "Ken Leung",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1970-01-21",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/3/7914.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/3/7914.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/20429"
                            }
                        }
                    },
                    "character": {
                        "id": 34832,
                        "url": "http://www.tvmaze.com/characters/34832/lost-miles-straume",
                        "name": "Miles Straume",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1415.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1415.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34832"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 14723,
                        "url": "http://www.tvmaze.com/people/14723/maggie-grace",
                        "name": "Maggie Grace",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1983-09-21",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/1/2882.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/2882.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/14723"
                            }
                        }
                    },
                    "character": {
                        "id": 34823,
                        "url": "http://www.tvmaze.com/characters/34823/lost-shannon-rutherford",
                        "name": "Shannon Rutherford",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1404.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1404.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34823"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 2707,
                        "url": "http://www.tvmaze.com/people/2707/jeremy-davies",
                        "name": "Jeremy Davies",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1969-10-08",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/2/5781.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/2/5781.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/2707"
                            }
                        }
                    },
                    "character": {
                        "id": 34822,
                        "url": "http://www.tvmaze.com/characters/34822/lost-daniel-faraday",
                        "name": "Daniel Faraday",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1416.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1416.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34822"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 21088,
                        "url": "http://www.tvmaze.com/people/21088/nestor-carbonell",
                        "name": "Nestor Carbonell",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1967-12-01",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/3/8511.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/3/8511.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/21088"
                            }
                        }
                    },
                    "character": {
                        "id": 34825,
                        "url": "http://www.tvmaze.com/characters/34825/lost-richard-alpert",
                        "name": "Richard Alpert",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1410.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1410.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34825"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 3317,
                        "url": "http://www.tvmaze.com/people/3317/rebecca-mader",
                        "name": "Rebecca Mader",
                        "country": {
                            "name": "United Kingdom",
                            "code": "GB",
                            "timezone": "Europe/London"
                        },
                        "birthday": "1977-04-24",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/1/4571.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/4571.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/3317"
                            }
                        }
                    },
                    "character": {
                        "id": 34831,
                        "url": "http://www.tvmaze.com/characters/34831/lost-charlotte-lewis",
                        "name": "Charlotte Lewis",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1414.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1414.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34831"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 8417,
                        "url": "http://www.tvmaze.com/people/8417/ian-somerhalder",
                        "name": "Ian Somerhalder",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1978-12-08",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/2/7223.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/2/7223.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/8417"
                            }
                        }
                    },
                    "character": {
                        "id": 34824,
                        "url": "http://www.tvmaze.com/characters/34824/lost-boone-carlyle",
                        "name": "Boone Carlyle",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1403.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1403.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34824"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 14,
                        "url": "http://www.tvmaze.com/people/14/jeff-fahey",
                        "name": "Jeff Fahey",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1952-11-29",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1163.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1163.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/14"
                            }
                        }
                    },
                    "character": {
                        "id": 34826,
                        "url": "http://www.tvmaze.com/characters/34826/lost-frank-lapidus",
                        "name": "Frank Lapidus",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1412.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1412.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34826"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 22918,
                        "url": "http://www.tvmaze.com/people/22918/malcolm-david-kelley",
                        "name": "Malcolm David Kelley",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1992-05-12",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/137/344977.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/137/344977.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/22918"
                            }
                        }
                    },
                    "character": {
                        "id": 34828,
                        "url": "http://www.tvmaze.com/characters/34828/lost-walt-lloyd",
                        "name": "Walt Lloyd",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1405.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1405.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34828"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 26411,
                        "url": "http://www.tvmaze.com/people/26411/michelle-rodriguez",
                        "name": "Michelle Rodriguez",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1978-07-12",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/12/31113.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/12/31113.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/26411"
                            }
                        }
                    },
                    "character": {
                        "id": 34830,
                        "url": "http://www.tvmaze.com/characters/34830/lost-ana-lucia-cortez",
                        "name": "Ana Lucia Cortez",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1423.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1423.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34830"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 26410,
                        "url": "http://www.tvmaze.com/people/26410/adewale-akinnuoye-agbaje",
                        "name": "Adewale Akinnuoye-Agbaje",
                        "country": {
                            "name": "United Kingdom",
                            "code": "GB",
                            "timezone": "Europe/London"
                        },
                        "birthday": "1967-08-22",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/2/7474.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/2/7474.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/26410"
                            }
                        }
                    },
                    "character": {
                        "id": 34827,
                        "url": "http://www.tvmaze.com/characters/34827/lost-mr-eko",
                        "name": "Mr. Eko",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1421.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1421.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34827"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 5554,
                        "url": "http://www.tvmaze.com/people/5554/cynthia-watros",
                        "name": "Cynthia Watros",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1968-09-02",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/3/8775.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/3/8775.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/5554"
                            }
                        }
                    },
                    "character": {
                        "id": 34829,
                        "url": "http://www.tvmaze.com/characters/34829/lost-libby-smith",
                        "name": "Libby Smith",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1420.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1420.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34829"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 1049,
                        "url": "http://www.tvmaze.com/people/1049/zuleikha-robinson",
                        "name": "Zuleikha Robinson",
                        "country": {
                            "name": "United Kingdom",
                            "code": "GB",
                            "timezone": "Europe/London"
                        },
                        "birthday": "1977-06-29",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/169/424830.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/169/424830.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/1049"
                            }
                        }
                    },
                    "character": {
                        "id": 34833,
                        "url": "http://www.tvmaze.com/characters/34833/lost-ilana-verdansky",
                        "name": "Ilana Verdansky",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1409.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1409.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34833"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 26413,
                        "url": "http://www.tvmaze.com/people/26413/rodrigo-santoro",
                        "name": "Rodrigo Santoro",
                        "country": {
                            "name": "Brazil",
                            "code": "BR",
                            "timezone": "America/Noronha"
                        },
                        "birthday": "1975-08-22",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/3/8778.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/3/8778.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/26413"
                            }
                        }
                    },
                    "character": {
                        "id": 34835,
                        "url": "http://www.tvmaze.com/characters/34835/lost-paulo",
                        "name": "Paulo",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1418.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1418.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34835"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                },
                {
                    "person": {
                        "id": 26412,
                        "url": "http://www.tvmaze.com/people/26412/kiele-sanchez",
                        "name": "Kiele Sanchez",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        },
                        "birthday": "1977-10-13",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/21/53166.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/21/53166.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/people/26412"
                            }
                        }
                    },
                    "character": {
                        "id": 34834,
                        "url": "http://www.tvmaze.com/characters/34834/lost-nikki-fernandez",
                        "name": "Nikki Fernandez",
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1417.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1417.jpg"
                        },
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/characters/34834"
                            }
                        }
                    },
                    "self": false,
                    "voice": false
                }
            ]
        }
    }
    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);

        wrapper = shallowMount(Details, {
            Vue,
            router,
            data() {
                return ({
                    detailedData: data
                })
            }
        })
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    })

    it('expected v-container stub', () => {
        const expected = '<v-container-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected v-card stub', () => {
        const expected = '<v-card-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('without data', () => {
        const expected = '<v-card-stub';
        wrapper = shallowMount(Details, {
            Vue,
            router,
            data() {
                return ({
                    detailedData: {}
                })
            },
            computed: {
                id() {
                    return 1;
                }
            }
        })
        expect(wrapper.html()).not.toContain(expected);
    })
})