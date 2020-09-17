import Vue from 'vue';

const template = require('./template.html');

export default Vue.component('project-grid-droplet', {
  template,
  name: 'project-grid-droplet',
  mounted() {
    const $blogGrid = $(this.$refs.projectGrid);
    $blogGrid.drzFilterGrid({
      output(data) {
        return `
        <div class="drzProject-grid-card">
          <a class="drzProject-grid-cardInner" href="#">
            <div
              class="drzProject-grid-cardImage"
              data-asset="${data.image}">
            </div>
            <div class="drzProject-grid-cardInfo">
              <span class="drzProject-grid-cardTitle">${data.title}</span>
            </div>
          </a>
        </div>
        `;
      },
      gridContainer: 'drzProject-grid-container',
      sortKey: 'projectDate',
      assets: 'bg',
      filters: ['large', 'small'],
      pagination: 6,
      searchKeys: ['title'],
      feed: [
        {
          created: '2020-08-19T19:31:14.835Z',
          image: '/static/images/mock-project.svg',
          projectDate: '2020-08-19T19:31:14.835Z',
          title: 'Project One',
          categories: ['large', 'small'],
        },
        {
          created: '2020-08-20T19:31:14.835Z',
          image: '/static/images/mock-project.svg',
          projectDate: '2020-08-20T19:31:14.835Z',
          title: 'Project Two',
          categories: ['large'],
        },
        {
          created: '2020-08-21T19:31:14.835Z',
          image: '/static/images/mock-project.svg',
          projectDate: '2020-08-21T19:31:14.835Z',
          title: 'Project Three',
          categories: ['large'],
        },
        {
          created: '2020-08-22T19:31:14.835Z',
          image: '/static/images/mock-project.svg',
          projectDate: '2020-08-22T19:31:14.835Z',
          title: 'Project Four',
          categories: ['large'],
        },
        {
          created: '2020-08-23T19:31:14.835Z',
          image: '/static/images/mock-project.svg',
          projectDate: '2020-08-23T19:31:14.835Z',
          title: 'Project Five',
          categories: ['large', 'small'],
        },
        {
          created: '2020-08-24T19:31:14.835Z',
          image: '/static/images/mock-project.svg',
          projectDate: '2020-08-24T19:31:14.835Z',
          title: 'Project Six',
          categories: ['large'],
        },
        {
          created: '2020-08-25T19:31:14.835Z',
          image: '/static/images/mock-project.svg',
          projectDate: '2020-08-25T19:31:14.835Z',
          title: 'Project Seven',
          categories: ['large'],
        },
        {
          created: '2020-08-26T19:31:14.835Z',
          image: '/static/images/mock-project.svg',
          projectDate: '2020-08-26T19:31:14.835Z',
          title: 'Project Eight',
          categories: ['large'],
        },
      ],
    });
  },
});
