import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  currentIndex: 0,
  currentSongs: [],
  activeSong: {
    layout: "5",
    type: "MUSIC",
    key: "632531170",
    title: "Unholy",
    subtitle: "Sam Smith & Kim Petras",
    share: {
      subject: "Unholy - Sam Smith & Kim Petras",
      text: "I used Shazam to discover Unholy by Sam Smith & Kim Petras.",
      href: "https://www.shazam.com/track/632531170/unholy",
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
      twitter: "I used @Shazam to discover Unholy by Sam Smith & Kim Petras.",
      html: "https://www.shazam.com/snippets/email-share/632531170?lang=en&country=GB",
      avatar:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/02/ec/b3/02ecb3c1-8c1c-7100-c430-a251066460a2/pr_source.png/800x800cc.jpg",
      snapchat: "https://www.shazam.com/partner/sc/track/632531170",
    },
    images: {
      background:
        "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/02/ec/b3/02ecb3c1-8c1c-7100-c430-a251066460a2/pr_source.png/800x800cc.jpg",
      coverart:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
      coverarthq:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
      joecolor: "b:36311dp:e4c29ds:e0a581t:c1a583q:be8e6d",
    },
    hub: {
      type: "APPLEMUSIC",
      image: "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
      actions: [
        {
          name: "apple",
          type: "applemusicplay",
          id: "1649325659",
        },
        {
          name: "apple",
          type: "uri",
          uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3c/2c/82/3c2c8235-9907-0405-b21c-8fd66d285e56/mzaf_6122099414111658029.plus.aac.ep.m4a",
        },
      ],
      options: [
        {
          caption: "OPEN",
          actions: [
            {
              name: "hub:applemusic:deeplink",
              type: "applemusicopen",
              uri: "https://music.apple.com/gb/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
            {
              name: "hub:applemusic:deeplink",
              type: "uri",
              uri: "https://music.apple.com/gb/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
            },
          ],
          beacondata: {
            type: "open",
            providername: "applemusic",
          },
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
          type: "open",
          listcaption: "Open in Apple Music",
          overflowimage:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
          colouroverflowimage: false,
          providername: "applemusic",
        },
      ],
      explicit: false,
      displayname: "APPLE MUSIC",
    },
    artists: [
      {
        alias: "sam-smith",
        id: "42",
        adamid: "156488786",
      },
      {
        alias: "kim-petras",
        id: "42",
        adamid: "291697579",
      },
    ],
    url: "https://www.shazam.com/track/632531170/unholy",
    highlightsurls: {},
    properties: {},
  },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    nextSong: (state, action) => {
      state.currentIndex = action.payload;
    },
    prevSong: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setActiveSong, playPause, nextSong, prevSong } =
  playerSlice.actions;

export default playerSlice.reducer;
