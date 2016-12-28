import OrgChart from '../js/orgchart-webcomponents.min.js';

document.addEventListener('DOMContentLoaded', function () {

  let datascource = {
    'name': 'Lao Lao',
    'title': 'general manager',
    'children': [
      { 'name': 'Bo Miao', 'title': 'department manager' },
      { 'name': 'Su Miao', 'title': 'department manager',
        'children': [
          { 'name': 'Tie Hua', 'title': 'senior engineer' },
          { 'name': 'Hei Hei', 'title': 'senior engineer' }
        ]
      },
      { 'name': 'Hong Miao', 'title': 'department manager' },
      { 'name': 'Chun Miao', 'title': 'department manager' }
    ]
  },
  orgchart = new OrgChart({
    'data' : datascource,
    'nodeContent': 'title',
    'direction': 'l2r'
  });

  document.querySelector('#chart-container').appendChild(orgchart);

});