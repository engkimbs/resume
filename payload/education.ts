import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한양대학교',
      subTitle: '컴퓨터공학 / 건축공학 복수 전공 학사 졸업',
      startedAt: '2009-03',
      endedAt: '2017-02',
    },
    {
      title: '대전둔원고등학교',
      subTitle: '자연계 졸업',
      startedAt: '2005-03',
      endedAt: '2008-02',
    },
  ],
};

export default education;
