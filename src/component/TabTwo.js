import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function TabsTwo({ tabStyle }) {
  let tab1 = 'Main skills',
    tab2 = 'Awards',
    tab3 = 'Education & Certification',
    tab4 = 'PORTFOLIO';

  return (
    <div>
      {/* Start Tabs Area */}
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={tabStyle}>
                  <Tab>{tab1}</Tab>
                  <Tab>{tab2}</Tab>
                  <Tab>{tab3}</Tab>
                  <Tab>
                    <a href="https://youtube.com/playlist?list=PLZ8Lt3b80Mg0IEVTTTn1SzP741w9tbqUj" target="_blank" rel="noopener noreferrer">
                      {tab4}
                    </a>
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        Youtube <span> - 각본,연출,촬영,편집</span>
                      </li>
                      <li>
                        Youtube 채널 <span> - 운영,구독자 16.5M</span>
                      </li>

                      <li>
                        영화 & 드라마 <span> - 각본,연출,촬영,편집</span>
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="/https://www.youtube.com/@dalbame" target="_blank" rel="noopener noreferrer">
                          2022 Youtube 달밤에 체조 <span>- 16.5M Subscriber</span>
                        </a>{' '}
                        2022
                      </li>

                      <li>
                        <a href="/https://www.youtube.com/watch?v=-kjibdQ5O2w" target="_blank" rel="noopener noreferrer">
                          2021 Youtube 트레일러 <span>- 2.1M View</span>
                        </a>{' '}
                        2021
                      </li>
                      <li>
                        2022 무비온넷 영화제 <span>- Winner</span> <br />
                        2022
                      </li>
                      <li>
                        2020 국민대학교 영화제 <span>- Winner</span> <br />
                        2020
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        국민대학교 영화학 <span> - 학사 취득</span>
                        <br />
                        2017 - 2020
                      </li>
                      <li>
                        학점은행제 경영전공 <span> - 전문학사 취득</span>
                        <br />
                        2014 - 2016
                      </li>
                      <li>
                        남강고등학교<span> - 졸업 </span>
                        <br />
                        2010- 2012
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* End Tabs Area */}
    </div>
  );
}
export default TabsTwo;
