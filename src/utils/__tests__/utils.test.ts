import { getNowPlaying } from '../lastFm'

describe('lastfm', () => {
  describe('getNowPlaying', () => {
    it('returns a now playing track', () => {
      const track: Partial<LastFM.RecentTrack> = {
        '@attr': {
          nowplaying: 'true'
        }
      }

      expect(getNowPlaying([track as any])).toEqual(track)
    })

    it('returns undefined when nowplaying = false', () => {
      const track: Partial<LastFM.RecentTrack> = {
        '@attr': {
          nowplaying: 'false'
        }
      }

      expect(getNowPlaying([track as any])).toBeUndefined()
    })

    it('returns undefined when @attr.nowplaying is undefined', () => {
      const track: Partial<LastFM.RecentTrack> = {
        artist: {
          mbid: '',
          '#text': ''
        }
      }

      expect(getNowPlaying([track as any])).toBeUndefined()
    })
  })
})
