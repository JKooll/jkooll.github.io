const messages = {
    en: {
        labels: {
            experience: 'Experience',
            education: 'Education',
            skills: 'Skills',
            interests: 'Interests',
            reference: 'Reference'
        },
        name: 'Jerry Zhao',
        title: 'Backend Developer',
        profile: 'Three years of PHP development experience, the technology stack is LAMP, has been able to independently develop small and medium-sized projects, and participated in relevant competitions, and achieved good results. Currently studying IT at Southern Cross University in Australia, with good teamwork skills, the ability to read English documents, and the like to research new technologies.',
        experience: {
            item_1: {
                job_company: 'YUEXIANG Culture Media',
                job_title: 'Backend Developer',
                job_time: 'Oct. 2017 - Feb. 2018',
                job_description: 'The main achievements of the position include: maintaining the company\'s website with other colleagues; participating in and completing the company\'s core product development; and timely solving customer problems.'
            }
        },
        education: {
            item_1: {
                name: 'Southern Cross University',
                major: 'Bachelor of Information Technology',
                time: 'Oct. 2016 - Oct. 2018',
                description: 'Related courses: Application Development, Web Development, Electronic Commerce Systems.'
            },
            item_2: {
              name: 'Chang Chun Normal University',
              major: 'Bachelor of Computer Science and Technology',
              time: 'Sept. 2014 - Oct. 2016',
              description: 'Related courses: Introduction to Computer Science, C++, Java, Computer Network, Discrete Mathematics.'
          }
        }
    },
    zh: {
      labels: {
          experience: '经历',
          education: '教育',
          skills: '技能',
          interests: '兴趣',
          reference: '参考'
      },
      name: '赵树权',
      title: '后端开发者',
      profile: '三年PHP开发经验，技术栈为LAMP，已经可以独立开发中小型项目，并参加相关比赛，取得过不错的成绩。目前在澳大利亚Southern Cross University读IT，具备很好的团队协作能力，具有阅读英文文档的能力，喜欢研究新技术。',
      experience: {
          item_1: {
              job_company: '悦享文化传媒',
              job_title: '后端开发者',
              job_time: '2017.10 - 2018.2',
              job_description: '该职位的主要成就包括：与其他同事维护公司网站; 参与并完成公司的核心产品开发; 及时解决客户的问题。'
          }
      },
      education: {
          item_1: {
              name: '南十字星大学',
              major: '信息技术学士',
              time: '2016.10 - 2018.10',
              description: '相关课程：Application Development，Web Development， Electronic Commerce Systems。'
          },
          item_2: {
            name: '长春师范大学',
            major: '计算机科学与技术学士',
            time: '2014.9 - 2016.10',
            description: '相关课程：计算机科学导论，C++，Java，计算机网络，离散数学。'
        }
      }
    }
  }
  
  // Create VueI18n instance with options
  const i18n = new VueI18n({
    locale: 'zh', // set locale
    messages, // set locale messages
  });

  new Vue({
      i18n,
      el: '#app',
      methods: {
          show: function (language) {
              i18n.locale = language;
          }
      }
  })