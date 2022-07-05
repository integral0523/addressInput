export type Koaza = {
  koazaName: string
  maxChoume: number
}
export type Shikuchoson = {
  shikuchosonName: string
  koazas: Array<Koaza>
}
export type Shikuchosons = Array<Shikuchoson>

export const shikuchosons: Shikuchosons = [
  {
    shikuchosonName: '武蔵野市',
    koazas: [
      { koazaName: '吉祥寺本町', maxChoume: 4 },
      { koazaName: '吉祥寺北町', maxChoume: 5 },
      { koazaName: '吉祥寺東町', maxChoume: 4 },
      { koazaName: '吉祥寺南町', maxChoume: 5 },
      { koazaName: '御殿山', maxChoume: 2 },
      { koazaName: '中町', maxChoume: 3 },
      { koazaName: '西久保', maxChoume: 3 },
      { koazaName: '緑町', maxChoume: 3 },
    ],
  },
  {
    shikuchosonName: '練馬区',
    koazas: [
      { koazaName: '立野町', maxChoume: 0 },
      { koazaName: '関町南', maxChoume: 4 },
      { koazaName: '関町北', maxChoume: 5 },
      { koazaName: '関町東', maxChoume: 2 },
      { koazaName: '上石神井南町', maxChoume: 0 },
      { koazaName: '上石神井', maxChoume: 4 },
    ],
  },
  {
    shikuchosonName: '西東京市',
    koazas: [
      { koazaName: '東伏見', maxChoume: 6 },
      { koazaName: '富士見町', maxChoume: 6 },
      { koazaName: '柳沢', maxChoume: 6 },
      { koazaName: '関町東', maxChoume: 2 },
      { koazaName: '保谷町', maxChoume: 6 },
    ],
  },
  {
    shikuchosonName: '三鷹市',
    koazas: [
      { koazaName: '井の頭', maxChoume: 5 },
      { koazaName: '下連雀', maxChoume: 9 },
      { koazaName: '上連雀', maxChoume: 9 },
      { koazaName: '牟礼', maxChoume: 7 },
    ],
  },
  {
    shikuchosonName: '杉並区',
    koazas: [
      { koazaName: '西荻北', maxChoume: 5 },
      { koazaName: '西荻南', maxChoume: 4 },
      { koazaName: '善福寺', maxChoume: 4 },
      { koazaName: '上井草', maxChoume: 4 },
      { koazaName: '松庵', maxChoume: 5 },
      { koazaName: '久我山', maxChoume: 5 },
    ],
  },
]
