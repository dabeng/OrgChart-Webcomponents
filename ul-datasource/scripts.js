import OrgChart from '../js/orgchart-webcomponents.min.js';

document.addEventListener('DOMContentLoaded', function () {

  let orgchart = new OrgChart({
    'data' : '#ul-data'
  });

  document.querySelector('#chart-container').appendChild(orgchart);

});