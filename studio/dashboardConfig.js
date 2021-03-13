export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604cf0068d3ab131fed392f8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4mdftqg1',
                  apiId: '951363f7-3655-423c-b3e9-d966bab4af7a'
                },
                {
                  buildHookId: '604cf00747c75b2dadbb24f3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z4u4p24v',
                  apiId: '1ebeccad-f3bd-4f3b-bbfb-a17ccaf42da9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevechez/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z4u4p24v.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
