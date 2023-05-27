import './App.css';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import { Header, Helmet, Hidden, PortfolioList, Tab } from './component';
import video from '../src/assets/video/video.mp4';
import mobileVideo from '../src/assets/video/mobileVideo.mp4';
function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  let title = 'About Me',
    description =
      '영화&유튜브 영상의 전반적인 모든 작업을 해 온 유기태를 소개합니다.창의적이고 예술성을 바탕으로 다양한 시각적 표현과 정보를 전달하는 작업을 줄곧 해왔습니다. 다수의 공감을 불러일으킬 수 있는 독창적인 콘텐츠를 제작해 드립니다. 그간 작업했던 영상물을 통해 다양한 장르와 각양각색의 콘텐츠를 제작할 수 있는 인재임을 알 수 있을 겁니다.';
  return (
    <div className="active-dark">
      <Helmet pageTitle="유기태 포트폴리오" />

      <Header homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}
      <section id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}

          <div className="slide d-flex align-items-center justify-content-center">
            <video id="video" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
              <source src={isMobile ? mobileVideo : video} />
            </video>
          </div>

          {/* End Single Slide */}
        </div>
      </section>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img className="w-100" src="/assets/images/about/kitaePhoto.jpeg" alt="About Images" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <Tab tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Latest Project</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList styevariation="text-center mt--40" column="col-6 col-12" item="6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix" style={{ visibility: 'hidden' }}>
        <div className="rn-contact-area  bg_color--1">
          <Hidden />
        </div>
      </div>
      {/* End COntact Area */}

      {/* <FooterTwo /> */}
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
}

export default App;
