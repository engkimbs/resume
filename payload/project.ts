import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Samsung Electronics iEES Data pipeline ',
      startedAt: '2018-08',
      where: 'Samsung SDS',
      descriptions: [
        {
          content: '시간 당 3000만 규모의 EES 설비 가공 및 적재 ( Tibrv, Oracle DB interface )',
        },
        {
          content: 'Flume Agent - 62, Kafka Topic - 77 개 운영 ( MSA 아키텍처 )',
        },
        {
          content: 'Site에 맞는 Agent 비즈니스 로직 및 Kafka Server 설정값 조정',
        },
        {
          content:
            'JVM 메모리 및 옵션 튜닝, JMX에 의한 Log 수준 조정을 통한 운영 데이터 모니터링 및 문제해결',
        },
        {
          content: 'Java 기반 데이터 포맷 변환 모듈 개발',
        },
      ],
    },
    {
      title: 'Samsung Electronics SPC system',
      startedAt: '2020-03',
      where: 'Samsung SDS',
      descriptions: [
        { content: 'Legacy 시스템 리팩토링 및 테스트 코드 도입, 기존 비즈니스 로직 유지보수 ( 4만 라인 규모 Pre, Post Module )' },
        { content: 'Java 1.6 -＞ 1.8 업그레이드 추진' },
        { content: '자동 테스트 및 배포 시스템 도입 (Jenkins ) ' },
        { content: 'Spring Boot 기반 데이터 정합성 검증용 운영 툴 개발' },
      ],
    },
  ],
};

export default project;
