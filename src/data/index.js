export const calculators = {
  1: {
    id: 1,
    title: 'PHASES scores',
    qualityTitle: '5年間破裂リスク(%)',
    references: [
      {
        title: '脳神経外科速報 2021年1月号(第31巻1号)特集:特集:脳血管内治療 専門医への道 3 ─知と技を兼ね備えた専門医へ',
        url: 'https://www.amazon.co.jp/%E8%84%B3%E7%A5%9E%E7%B5%8C%E5%A4%96%E7%A7%91%E9%80%9F%E5%A0%B1-2021%E5%B9%B41%E6%9C%88%E5%8F%B7-%E7%AC%AC31%E5%B7%BB1%E5%8F%B7-%E7%89%B9%E9%9B%86/dp/4840473404'
      }
    ],
    inputs: [{
      label: '人種',
      options: [{
        label: '北欧 or 欧州',
        note: 'フィンランド以外',
        score: 0
      }, {
        label: '日本',
        note: null,
        score: 3
      }, {
        label: 'フィンランド',
        note: null,
        score: 5
      }]
    }, {
      label: '年齢',
      options: [{
        label: '< 70歳',
        score: 0
      }, {
        label: '≧ 70歳',
        score: 1
      }
      ]
    }, {
      label: '高血圧',
      options: [{
        label: 'なし',
        score: 0
      }, {
        label: 'あり',
        score: 1
      }
      ]
    }, {
      label: '動脈瘤の部位',
      options: [{
        label: '内頚動脈',
        score: 0
      }, {
        label: '中大脳動脈',
        score: 2
      }, {
        label: '前大脳動脈 / 後交通動脈 / 後方循環',
        score: 4
      }]
    }, {
      label: '動脈瘤のサイズ',
      options: [
        {
          label: 'size < 7mm',
          score: 0
        },
        {
          label: '7 ≦ size < 10mm',
          score: 3
        },
        {
          label: '10 ≦ size < 20mm',
          score: 6
        },
        {
          label: '20mm < size',
          score: 10
        }
      ]
    }, {
      label: 'くも膜下出血の既住',
      options: [{
        label: 'なし',
        score: 0
      }, {
        label: 'あり',
        score: 0
      }]
    }
    ],
    qualities: [{
      label: '0.4',
      value: 2,
      operator: 'less than or equal'
    }, {
      label: '0.7',
      value: 3,
      operator: 'equal'
    }, {
      label: '0.9',
      value: 4,
      operator: 'equal'
    }, {
      label: '1.3',
      value: 5,
      operator: 'equal'
    }, {
      label: '1.7',
      value: 6,
      operator: 'equal'
    }, {
      label: '2.4',
      value: 7,
      operator: 'equal'
    }, {
      label: '3.2',
      value: 8,
      operator: 'equal'
    }, {
      label: '4.3',
      value: 9,
      operator: 'equal'
    }, {
      label: '5.3',
      value: 10,
      operator: 'equal'
    }, {
      label: '7.2',
      value: 11,
      operator: 'equal'
    }, {
      label: '17.8',
      value: 12,
      operator: 'greater than or equal'
    }]
  },
  2: {
    id: 2,
    title: 'UCAS Prediction model risk scores',
    qualityTitle: '3年間破裂リスク(%)',
    references: [
      {
        title: '脳神経外科速報 2021年1月号(第31巻1号)特集:特集:脳血管内治療 専門医への道 3 ─知と技を兼ね備えた専門医へ',
        url: 'https://www.amazon.co.jp/%E8%84%B3%E7%A5%9E%E7%B5%8C%E5%A4%96%E7%A7%91%E9%80%9F%E5%A0%B1-2021%E5%B9%B41%E6%9C%88%E5%8F%B7-%E7%AC%AC31%E5%B7%BB1%E5%8F%B7-%E7%89%B9%E9%9B%86/dp/4840473404'
      }
    ],
    inputs: [{
      label: '年齢',
      options: [{
        label: '< 70歳',
        score: 0
      }, {
        label: '≧ 70歳',
        score: 1
      }]
    }, {
      label: '性別',
      options: [{
        label: '男性',
        score: 0
      }, {
        label: '女性',
        score: 1
      }
      ]
    }, {
      label: '高血圧',
      options: [{
        label: 'なし',
        score: 0
      }, {
        label: 'あり',
        score: 1
      }
      ]
    }, {
      label: '動脈瘤の部位',
      options: [{
        label: '内頚動脈',
        score: 0
      }, {
        label: '全大脳動脈 / 椎骨動脈',
        score: 1
      }, {
        label: '中大脳動脈 / 脳底動脈',
        score: 2
      }, {
        label: '前交通動脈 / 後交通動脈',
        score: 3
      }]
    }, {
      label: '動脈瘤のサイズ',
      options: [
        {
          label: '3 ≦ size < 7mm',
          score: 0
        },
        {
          label: '7 ≦ size < 10mm',
          score: 2
        },
        {
          label: '10 ≦ size < 20mm',
          score: 5
        },
        {
          label: '20mm < size',
          score: 8
        }
      ]
    }, {
      label: '動脈瘤の形状',
      options: [{
        label: 'なし',
        score: 0
      }, {
        label: 'あり',
        score: 1
      }]
    }],
    qualities: [{
      label: '0.2',
      value: 0,
      operator: 'equal'
    }, {
      label: '0.4',
      value: 1,
      operator: 'equal'
    }, {
      label: '0.6',
      value: 2,
      operator: 'equal'
    }, {
      label: '0.9',
      value: 3,
      operator: 'equal'
    }, {
      label: '1.4',
      value: 4,
      operator: 'equal'
    }, {
      label: '2.3',
      value: 5,
      operator: 'equal'
    }, {
      label: '3.7',
      value: 6,
      operator: 'equal'
    }, {
      label: '5.7',
      value: 7,
      operator: 'equal'
    }, {
      label: '7.6',
      value: 8,
      operator: 'equal'
    }, {
      label: '17',
      value: 9,
      operator: 'greater than or equal'
    }]
  }
}
