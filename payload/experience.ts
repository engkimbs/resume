import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Samsung SDS',
      position: 'Data pipeline 구축 및 운영',
      startedAt: '2017-08',
      descriptions: [
        'Samsung Electronics Data pipeline 시스템 구축 및 운영',
        '설비 Engineer Needs에 맞춘 데이터 가공, 적재 및 알림 서비스 개발',
        'Data 정상 적재 모니터링 및 정합성 체크',
        '레거시 청산 및 기존 비즈니스 유지보수',
      ],
      skillKeywords: ['Java', 'Flume', 'Kafka', 'Redis', 'Oracle', 'Tibrv'],
    },
  ],
};

export default experience;
