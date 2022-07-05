<template lang="pug">
div
  v-card.mx-auto(outlined)
    v-card-title 住所入力
    v-card-text
      v-form
        v-select(
          label='地図市区町村',
          :items='shikuchosons.map((shikuchoson) => shikuchoson.shikuchosonName)',
          v-model='chizuShikuchoson'
        )
        v-text-field(label='地図発行年', v-model='chizuYear')
        v-text-field(label='地図ページ番号', v-model='chizuPage')
        v-divider
        v-text-field(label='施設・建物名', v-model='shisetsu')
        v-radio-group(v-model='selectshikuchoson', row)
          v-radio(
            v-for='shikuchoson in shikuchosons',
            :value='shikuchoson',
            :label='shikuchoson.shikuchosonName',
            :key='shikuchoson.shikuchosonName'
          )
        v-radio-group(v-show='selectshikuchoson', v-model='selectKoaza', row)
          v-radio(
            v-for='koaza in selectshikuchoson.koazas ? selectshikuchoson.koazas : []',
            :value='koaza',
            :label='koaza.koazaName',
            :key='koaza.koazaName'
          )
        v-radio-group(v-show='selectKoaza', v-model='selectChoume', row)
          v-radio(
            v-for='choume in selectKoaza ? (selectKoaza.maxChoume ? selectKoaza.maxChoume : 0) : 0',
            :value='String(choume)',
            :label='`${String(choume)}丁目`',
            :key='choume'
          )
        div(v-show='selectChoume || (selectKoaza && selectKoaza.maxChoume==0)')
          v-text-field(
            label='番地',
            v-model='banchi',
            :rules='banchiRule',
            required
          )
          v-container(justify-center)
            v-row.ma-0.pa-0.justify-center(
              v-for='button in buttons',
              :key='button[0]'
            )
              v-btn.ma-2(
                v-for='string in button',
                :key='string',
                elevation='2',
                @click='inputButton(string)'
              ) {{ string }}
      p {{ zyusyo }}
      v-btn(block, @click='save') 保存
  v-card.mx-auto.my-5(outlined)
    v-card-text
      v-dialog(transition='dialog-bottom-transition', max-width='600')
        template(v-slot:activator='{ on, attrs }')
          v-btn(block, @click='downloadReady', v-bind='attrs', v-on='on') ダウンロードする
        template(v-slot:default='dialog')
          v-card
            v-card-title ダウンロードの準備ができました
            v-card-actions
              v-btn(text, :href='downloadUrl', block) ダウンロード
            v-card-actions.justify-end
              v-btn(text, @click='dialog.value = false') Close
  v-snackbar(v-model='snackbar') 保存しました
    template(v-slot:action='{ attrs }')
      v-btn(color='pink', text, v-bind='attrs', @click='snackbar = false') 閉じる
</template>

<script lang="ts">
import Vue from 'vue'
import { shikuchosons, Koaza, Shikuchoson } from '@/assets/zyukyohyouziData'
export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    chizuShikuchoson: '',
    chizuYear: '',
    chizuPage: '',
    shisetsu: '',
    shikuchosons,
    selectshikuchoson: {} as Shikuchoson,
    selectKoaza: {} as Koaza,
    selectChoume: '',
    banchi: '',
    banchiRule: [(val: string) => /^\d+(-\d+)*$/.test(val) || 'Error'],
    buttons: [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
      ['-', 0, 'del'],
    ],
    snackbar: false,
    downloadUrl: '',
  }),
  computed: {
    zyusyo() {
      return `${
        this.selectshikuchoson && this.selectshikuchoson.shikuchosonName
          ? this.selectshikuchoson.shikuchosonName
          : ''
      }${
        this.selectKoaza && this.selectKoaza.koazaName
          ? this.selectKoaza.koazaName
          : ''
      }${this.selectChoume ? this.selectChoume + '丁目' : ''}${this.banchi}`
    },
  },
  methods: {
    inputButton(string: string) {
      if (string === 'del') {
        this.banchi = this.banchi.slice(0, -1)
      } else {
        this.banchi += string
      }
    },
    save() {
      if (!this.zyusyo) return
      const myCat = localStorage.getItem('myCat')
      if (!myCat)
        localStorage.setItem('myCat', this.shisetsu + ',' + this.zyusyo)
      else
        localStorage.setItem(
          'myCat',
          myCat + '\n' + this.shisetsu + ',' + this.zyusyo
        )
      this.reset()
      this.snackbar = true
    },
    reset() {
      this.shisetsu = ''
      // this.selectshikuchoson = {} as Shikuchoson
      // this.selectKoaza = {} as Koaza
      // this.selectChoume = ''
      this.banchi = ''
    },
    downloadReady() {
      let myCat = localStorage.getItem('myCat')
      if (!myCat) myCat = ''
      this.downloadUrl = URL.createObjectURL(
        new Blob([myCat], {
          type: 'application/octet-stream',
        })
      )
    },
  },
})
</script>