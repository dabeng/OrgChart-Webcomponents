import OrgChart from '../js/orgchart-webcomponents.min.js';

document.addEventListener('DOMContentLoaded', function () {

  let datascource = {
    'name': 'Lao Lao',
    'title': 'general manager',
    'children': [
      { 'name': 'Bo Miao', 'title': 'department manager',
        'children': [{ 'name': 'Li Xin', 'title': 'senior engineer' }]
      },
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
      { 'name': 'Hong Miao', 'title': 'department manager' },
      { 'name': 'Chun Miao', 'title': 'department manager' }
    ]
  },
  orgchart = new OrgChart({
    'data' : datascource,
    'nodeContent': 'title',
    'draggable': true,
    'dropCriteria': function(draggedNode, dragZone, dropZone) {
      if(draggedNode.querySelector(':scope > .content').textContent.includes('manager') &&
        dropZone.querySelector(':scope > .content').textContent.includes('engineer')) {
        return false;
      }
      return true;
    }
  });
  document.querySelector('#chart-container').appendChild(orgchart);

  orgchart.addEventListener('nodedropped.orgchart', function(event) {
    console.log('draggedNode:' + event.detail.draggedNode.querySelector(':scope > .title').textContent
      + ', dragZone:' + event.detail.dragZone.querySelector(':scope > .title').textContent
      + ', dropZone:' + event.detail.dropZone.querySelector(':scope > .title').textContent
    );
  });

});