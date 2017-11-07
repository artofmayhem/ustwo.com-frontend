import React from 'react';
import Hero from 'app/components/hero';

function HeroNoVideo({ pageName, fixedHeight, isMobile, scrollProgress, title }) {
  return (
    <div className={`hero-no-video ${pageName}-hero`}>
      <Hero
        title={title}
        transitionImage={true}
        eventLabel={pageName.replace('-', ' ')}
        showDownIndicator={true}
        fixedHeight={fixedHeight}
        isMobile={isMobile}
        scrollProgress={scrollProgress}
        heroImage={true}
      />
    </div>
  );
}

export default HeroNoVideo;