import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '백엔드 개발과 실시간 데이터 파이프 라인 구축 및 빅데이터 적재에 관한 경력과 관심이 있습니다. Java, Kafka, Redis, Oracle, Git, Linux 등을 사용하며 프로덕션 데이터 플랫폼을 개발, 운영한 경험으로 확장성과 유지보수성, 가용성이 높은 아키텍처 구축을 위해 노력하고 있습니다',
    '오픈소스 프로젝트에 관심이 많고 회사 업무 이외에 개인 프로젝트를 통해 프론트엔드 기술 및 다른 시스템 아키텍처에 대한 공부를 통해 다양한 개발 경험을 즐기고 있습니다. 개인적으로 공부한 것을 기록하는 것을 선호하여 개발 블로그에 200개가 넘는 포스팅을 작성한 상태입니다. 현재 데이터 플랫폼 구축 및 엔지니어링 쪽의 커리어를 계속 깊이있게 쌓고 싶으며 나중에는 기술 조직 리더라는 목표를 가지고 개발 조직을 리딩하는 역할을 맡고 싶다는 욕심이 있습니다.',
    // '시스템 개발이란 결국 얼마나 사용자의 요구사항을 정확히 잘 캐치하여 불필요한 커뮤니케이션 낭비를 없애는 것에 성패가 달려있다고 생각합니다.',
  ],
  sign: 'KBS',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
