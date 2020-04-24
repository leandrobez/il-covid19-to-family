//DOM
const listConfirmed = document.getElementById('confirmed');
const listRecovered = document.getElementById('recovered');
const listDeaths = document.getElementById('deaths');
const update = document.getElementById('update');

const listConfirmedUSA = document.getElementById('confirmedUSA');
const listRecoveredUSA = document.getElementById('recoveredUSA');
const listDeathsUSA = document.getElementById('deathsUSA');
const updateUSA = document.getElementById('updateUSA');

const listConfirmedIta = document.getElementById('confirmedIta');
const listRecoveredIta = document.getElementById('recoveredIta');
const listDeathsIta = document.getElementById('deathsIta');
const updateIta = document.getElementById('updateIta');

const listConfirmedCA = document.getElementById('confirmedCA');
const listRecoveredCA = document.getElementById('recoveredCA');
const listDeathsCA = document.getElementById('deathsCA');
const updateCA = document.getElementById('updateCA');

const listConfirmedCHN = document.getElementById('confirmedCHN');
const listRecoveredCHN = document.getElementById('recoveredCHN');
const listDeathsCHN = document.getElementById('deathsCHN');
const updateCHN = document.getElementById('updateCHN');

const listConfirmedDE = document.getElementById('confirmedDE');
const listRecoveredDE = document.getElementById('recoveredDE');
const listDeathsDE = document.getElementById('deathsDE');
const updateDE = document.getElementById('updateDE');

const listConfirmedGB = document.getElementById('confirmedGB');
const listRecoveredGB = document.getElementById('recoveredGB');
const listDeathsGB = document.getElementById('deathsGB');
const updateGB = document.getElementById('updateGB');

let dataUpdate = '';
const urlAPI = 'https://covid19.mathdro.id';

const endPoint = [
  {
    id: 1,
    pointer: '/api/confirmed',
    description: 'global cases per region sorted by confirmed cases',
  },
  {
    id: 2,
    pointer: '/api/recovered',
    description: 'global cases per region sorted by recovered cases',
  },
  {
    id: 3,
    pointer: '/api/deaths',
    description: 'global cases per region sorted by death toll',
  },
  {
    id: 4,
    pointer: '/api/countries/',
    description:
      'a [country] summary (e.g. /api/countries/Indonesia or /api/countries/USA or /api/countries/CN)',
  },
  {
    id: 5,
    pointer: '/api/daily/',
    description: 'global cases per day',
  },
];

function run() {
  axios
    .get(urlAPI + endPoint[3].pointer + 'BRA')
    .then((res) => {
      const result = res.data;
      return result;
    })
    .then((value) => {
      dataUpdate = value.lastUpdate;
      update.innerText = 'Última atualização ' + dataUpdate;
      listConfirmed.innerText = 'Casos confirmados: ' + value.confirmed.value;
      listRecovered.innerText =
        'Pacientes recuperados: ' + value.recovered.value;
      listDeaths.innerText = 'Óbitos confirmados: ' + value.deaths.value;

      axios.get(urlAPI + endPoint[3].pointer + 'USA').then((res) => {
        const result = res.data;
        dataUpdateUSA = result.lastUpdate;
        updateUSA.innerText = 'Última atualização ' + dataUpdateUSA;
        listConfirmedUSA.innerText =
          'Casos confirmados: ' + result.confirmed.value;
        listRecoveredUSA.innerText =
          'Pacientes recuperados: ' + result.recovered.value;
        listDeathsUSA.innerText = 'Óbitos confirmados: ' + result.deaths.value;
      });

      axios.get(urlAPI + endPoint[3].pointer + 'ITA').then((res) => {
        const result = res.data;
        dataUpdateIta = result.lastUpdate;
        updateIta.innerText = 'Última atualização ' + dataUpdateIta;
        listConfirmedIta.innerText =
          'Casos confirmados: ' + result.confirmed.value;
        listRecoveredIta.innerText =
          'Pacientes recuperados: ' + result.recovered.value;
        listDeathsIta.innerText = 'Óbitos confirmados: ' + result.deaths.value;
      });

      axios.get(urlAPI + endPoint[3].pointer + 'CA').then((res) => {
        const result = res.data;
        dataUpdateCA = result.lastUpdate;
        updateCA.innerText = 'Última atualização ' + dataUpdateCA;
        listConfirmedCA.innerText =
          'Casos confirmados: ' + result.confirmed.value;
        listRecoveredCA.innerText =
          'Pacientes recuperados: ' + result.recovered.value;
        listDeathsCA.innerText = 'Óbitos confirmados: ' + result.deaths.value;
      });

      axios.get(urlAPI + endPoint[3].pointer + 'CHN').then((res) => {
        const result = res.data;
        dataUpdateCHN = result.lastUpdate;
        updateCHN.innerText = 'Última atualização ' + dataUpdateCHN;
        listConfirmedCHN.innerText =
          'Casos confirmados: ' + result.confirmed.value;
        listRecoveredCHN.innerText =
          'Pacientes recuperados: ' + result.recovered.value;
        listDeathsCHN.innerText = 'Óbitos confirmados: ' + result.deaths.value;
      });

      axios.get(urlAPI + endPoint[3].pointer + 'DE').then((res) => {
        const result = res.data;
        dataUpdateDE = result.lastUpdate;
        updateDE.innerText = 'Última atualização ' + dataUpdateDE;
        listConfirmedDE.innerText =
          'Casos confirmados: ' + result.confirmed.value;
        listRecoveredDE.innerText =
          'Pacientes recuperados: ' + result.recovered.value;
        listDeathsDE.innerText = 'Óbitos confirmados: ' + result.deaths.value;
      });

      axios.get(urlAPI + endPoint[3].pointer + 'GB').then((res) => {
        const result = res.data;
        dataUpdateGB = result.lastUpdate;
        updateGB.innerText = 'Última atualização ' + dataUpdateGB;
        listConfirmedGB.innerText =
          'Casos confirmados: ' + result.confirmed.value;
        listRecoveredGB.innerText =
          'Pacientes recuperados: ' + result.recovered.value;
        listDeathsGB.innerText = 'Óbitos confirmados: ' + result.deaths.value;
      });
    });
}
let repeat = 4;
let count = 0;
/*let interval = setInterval(() => {
  count++;
  run();
}, 4000);
if (count == repeat) {
  clearInterval(interval);
}*/

run();
