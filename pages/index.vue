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
        v-switch(label='左右', v-model='leftOrRight', dense)
        v-divider
        v-radio-group(v-model='selectshikuchoson', row, dense)
          v-radio(
            v-for='shikuchoson in shikuchosons',
            :value='shikuchoson',
            :label='shikuchoson.shikuchosonName',
            :key='shikuchoson.shikuchosonName'
          )
        v-radio-group(
          v-show='selectshikuchoson',
          v-model='selectKoaza',
          row,
          dense
        )
          v-radio(
            v-for='koaza in selectshikuchoson.koazas ? selectshikuchoson.koazas : []',
            :value='koaza',
            :label='koaza.koazaName',
            :key='koaza.koazaName'
          )
        v-radio-group(v-show='selectKoaza', v-model='selectChoume', row, dense)
          v-radio(
            dense,
            v-for='choume in selectKoaza ? (selectKoaza.maxChoume ? selectKoaza.maxChoume : 0) : 0',
            :value='String(choume)',
            :label='`${String(choume)}丁目`',
            :key='choume'
          )
        v-divider.mt-3.mb-8
        v-text-field(label='施設・建物名', v-model='shisetsu', dense)
        div(v-show='selectChoume || (selectKoaza && selectKoaza.maxChoume==0)')
          v-text-field(
            dense,
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
    v-card-title 入力データ操作
    v-card-actions
      v-btn(block, @click='openData')
        span(v-if='!showData') データを見る
        span(v-else) 閉じる
    template(v-if='showData')
      v-dialog(transition='dialog-bottom-transition', max-width='600')
        template(v-slot:activator='{ on, attrs }')
          v-card-text
            v-row.ma-0.pa-0.justify-center
              v-btn(@click='sortDataRiverse = !sortDataRiverse') 並び替え
            v-simple-table
              thead
                tr
                  th 施設・建物名
                  th 住所
              tbody(
                v-for='cat in myCatShowData',
                :key='cat.index',
                @click='edit(cat)',
                v-bind='attrs',
                v-on='on'
              )
                tr
                  td {{ cat.name }}
                  td {{ cat.address }}
        template(v-slot:default='dialog')
          v-card
            v-card-title データを編集する
            v-card-text
              v-text-field(label='住所', v-model='editDataAddress', dense)
              v-text-field(label='施設・建物名', v-model='editDataName', dense)
            v-card-actions.justify-end
              v-btn(text, @click='saveEdit(); dialog.value = false') 保存する
      v-card-actions
        v-btn(block, @click='closeData') 閉じる
    v-card-actions
      v-dialog(transition='dialog-bottom-transition', max-width='600')
        template(v-slot:activator='{ on, attrs }')
          v-btn(block, @click='downloadReady', v-bind='attrs', v-on='on') ダウンロードする
        template(v-slot:default='dialog')
          v-card
            v-card-title ダウンロードの準備ができました
            v-card-actions
              v-btn(
                text,
                :href='downloadUrl',
                :download='fileName',
                @click='deleteFlag = true',
                block
              ) ダウンロード
            v-card-actions.justify-end
              v-btn(text, @click='dialog.value = false') 閉じる
    v-card-actions(v-show='deleteFlag')
      v-btn(block, @click='deleteData') データを削除する
  v-snackbar(v-model='snackbar') {{ snackbarText }}
    template(v-slot:action='{ attrs }')
      v-btn(color='pink', text, v-bind='attrs', @click='snackbar = false') 閉じる
</template>

<script lang="ts">
import Vue from 'vue'
import { shikuchosons, Koaza, Shikuchoson } from '@/assets/zyukyohyouziData'

type MyCatShowData = { index?: number; name: string; address: string }

export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    chizuShikuchoson: '',
    chizuYear: '',
    chizuPage: '',
    leftOrRight: false,
    shisetsu: '',
    shikuchosons,
    selectshikuchoson: {} as Shikuchoson,
    selectKoaza: {} as Koaza,
    selectChoume: '',
    banchi: '',
    banchiRule: [(val: string) => /^(\d+(-\d+)*)*$/.test(val) || 'Error'],
    buttons: [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      ['-', 0, 'del'],
    ],
    myCat: [] as string[],
    showData: false,
    sortDataRiverse: true,
    editDataName: '',
    editDataAddress: '',
    snackbar: false,
    snackbarText: '',
    downloadUrl: '',
    fileName: 'addressData.csv',
    deleteFlag: false,
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
    chizuData() {
      return (
        this.chizuShikuchoson +
        '(' +
        this.chizuYear +
        '）p.' +
        this.chizuPage +
        (this.leftOrRight ? '右' : '左')
      )
    },
    myCatShowData(): MyCatShowData[] {
      return this.myCat
        .map((cat, i) => {
          const splitted = cat.split(',')
          return {
            index: i,
            name: splitted[0],
            address: splitted[1],
          }
        })
        .sort((a, b) => {
          if (!this.sortDataRiverse) return a.index - b.index
          else return -a.index + b.index
        })
    },
  },
  mounted() {
    this.updateMyCat()
  },
  methods: {
    inputButton(string: string) {
      if (string === 'del') {
        this.banchi = this.banchi.slice(0, -1)
      } else if (string === '-') {
        if (this.banchi.at(-1) !== '-') {
          this.banchi += string
        }
      } else {
        this.banchi += string
      }
    },
    updateMyCat() {
      const myCat = localStorage.getItem('myCat')
      if (myCat === null) {
        this.myCat = []
      } else {
        this.myCat = myCat.split('\n')
      }
    },
    save() {
      if (!this.zyusyo) return
      this.deleteFlag = false
      this.updateMyCat()
      try {
        localStorage.setItem(
          'myCat',
          this.myCat.join('\n') +
            '\n' +
            this.shisetsu +
            ',' +
            this.zyusyo +
            ',' +
            this.chizuData
        )
      } catch (error) {
        alert(error)
      }
      this.reset()
      this.snackbar = true
      this.snackbarText = '保存しました'
    },
    saveEdit() {
      if (!this.editDataAddress) return
      this.deleteFlag = false
      this.updateMyCat()
      try {
        localStorage.setItem(
          'myCat',
          this.myCat.join('\n') +
            '\n' +
            this.editDataName +
            ',' +
            this.editDataAddress +
            ',' +
            this.chizuData
        )
      } catch (error) {
        alert(error)
      }
      this.editDataName = ''
      this.editDataAddress = ''
      this.updateMyCat()
      this.snackbar = true
      this.snackbarText = '保存しました'
    },
    openData() {
      this.updateMyCat()
      this.showData = !this.showData
    },
    closeData() {
      this.showData = false
    },
    edit(cat: MyCatShowData) {
      this.editDataName = cat.name
      this.editDataAddress = cat.address
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
      this.fileName = `addressData${new Date().toISOString()}.csv`
      this.downloadUrl = URL.createObjectURL(
        new Blob([myCat], {
          type: 'application/octet-stream',
        })
      )
    },
    deleteData() {
      if (!this.deleteFlag) return false
      localStorage.removeItem('myCat')
      this.updateMyCat()
      this.deleteFlag = false
      this.snackbar = true
      this.snackbarText = 'データ削除しました'
    },
  },
})
</script>