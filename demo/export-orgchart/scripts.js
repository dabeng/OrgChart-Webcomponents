import OrgChart from '../js/orgchart-webcomponents.min.js'

function clickExportButton() {
    let chartContainer = document.querySelector('#chart-container'),
      mask = chartContainer.querySelector(':scope > .mask'),
      sourceChart = chartContainer.querySelector('org-chart:not(.hidden)'),
      flag = sourceChart.classList.contains('l2r') || sourceChart.classList.contains('r2l');

    if (!mask) {
      mask = document.createElement('div');
      mask.setAttribute('class', 'mask');
      mask.innerHTML = `<i class="fa fa-circle-o-notch fa-spin spinner"></i>`;
      chartContainer.appendChild(mask);
    } else {
      mask.classList.remove('hidden');
    }
    chartContainer.classList.add('canvasContainer');
    window.html2canvas(sourceChart, {
      'width': flag ? sourceChart.clientHeight : sourceChart.clientWidth,
      'height': flag ? sourceChart.clientWidth : sourceChart.clientHeight,
      'onclone': function (cloneDoc) {
        let canvasContainer = cloneDoc.querySelector('.canvasContainer');

        canvasContainer.style.overflow = 'visible';
        canvasContainer.querySelector('org-chart:not(.hidden)').transform = '';
      }
    })
    .then((canvas) => {
      let downloadBtn = chartContainer.querySelector('.oc-download-btn');

      chartContainer.querySelector('.mask').classList.add('hidden');
      downloadBtn.setAttribute('href', canvas.toDataURL());
      downloadBtn.click();
    })
    .catch((err) => {
      console.error('Failed to export the curent orgchart!', err);
    })
    .finally(() => {
      chartContainer.classList.remove('canvasContainer');
    });
}

document.addEventListener('DOMContentLoaded', function () {

  let datascource = {
    'name': 'Lao Lao',
    'title': 'general manager',
    'children': [
      { 'name': 'Bo Miao', 'title': 'department manager' },
      { 'name': 'Su Miao', 'title': 'department manager',
        'children': [
          { 'name': 'Tie Hua', 'title': 'senior engineer' },
          { 'name': 'Hei Hei', 'title': 'senior engineer',
            'children': [
              { 'name': 'Pang Pang', 'title': 'engineer' },
              { 'name': 'Xiang Xiang', 'title': 'UE engineer' }
            ]
          }
        ]
      },
      { 'name': 'Yu Jie', 'title': 'department manager' },
      { 'name': 'Yu Li', 'title': 'department manager' },
      { 'name': 'Hong Miao', 'title': 'department manager' },
      { 'name': 'Yu Wei', 'title': 'department manager' },
      { 'name': 'Chun Miao', 'title': 'department manager' },
      { 'name': 'Yu Tie', 'title': 'department manager' }
    ]
  },
  orgchart = new OrgChart({
    'data' : datascource,
    'depth': 2,
    'nodeContent': 'title'
  }),
  chartContainer = document.querySelector('#chart-container');

  chartContainer.appendChild(orgchart);
  // append the export button to the chart-container
  let exportBtn = document.createElement('button'),
    downloadBtn = document.createElement('a');

  exportBtn.setAttribute('class', 'oc-export-btn');
  exportBtn.innerHTML = 'Export';
  exportBtn.addEventListener('click', clickExportButton);
  downloadBtn.setAttribute('class', 'oc-download-btn');
  downloadBtn.setAttribute('download', 'MyOrgChart.png');
  chartContainer.appendChild(exportBtn);
  chartContainer.appendChild(downloadBtn);

});