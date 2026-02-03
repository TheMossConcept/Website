import { Grid, Typography } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import HeadlineSection from '../components/sections/HeadlineSection';
import TextContainer from '../components/TextContainer';
import calculateOpacity from '../utilities/calculateOpacity';
import TheWeeDairyImage1 from '../public/images/portfolio_images/The wee dairy/The wee dairy 1.png';
import TheWeeDairyImage2 from '../public/images/portfolio_images/The wee dairy/The wee dairy 2.png';
import TheWeeDairyImage3 from '../public/images/portfolio_images/The wee dairy/The wee dairy 3.png';
import TheWeeDairyImage4 from '../public/images/portfolio_images/The wee dairy/The wee dairy 4.png';
import TheWeeDairyImage5 from '../public/images/portfolio_images/The wee dairy/The wee dairy 5.png';
import TheWeeDairyImage6 from '../public/images/portfolio_images/The wee dairy/The wee dairy 6.png';
import HoueImage1 from '../public/images/portfolio_images/Houe/Houe 1.png';
import HoueImage2 from '../public/images/portfolio_images/Houe/Houe 2.png';
import HoueImage3 from '../public/images/portfolio_images/Houe/Houe 3.png';
import useIsMobile from '../utilities/useIsMobile';
import MediaSection from '../components/sections/MediaSection';

const PartnershipPageTeaserSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const [firstTextOpacity, setFirstTextOpacity] = useState(0);
  const [secondTextOpacity, setSecondTextOpacity] = useState(0);

  useEffect(() => {
    const updateOpacity = () => {
      const newFirstTextOpacity = calculateOpacity(
        containerRef,
        isMobile ? 55 : 85,
        isMobile ? 2 : 3
      );
      const newSecondTextOpacity = calculateOpacity(
        containerRef,
        isMobile ? 95 : 115,
        isMobile ? 2 : 3
      );

      setFirstTextOpacity(newFirstTextOpacity);
      setSecondTextOpacity(newSecondTextOpacity);
    };

    window.addEventListener('scroll', updateOpacity);
    return () => {
      window.removeEventListener('scroll', updateOpacity);
    };
  }, []);

  console.log(`Second text opacity: ${secondTextOpacity}`)
  const shouldCarouselSecondSection = secondTextOpacity > 1

  return (
    <Grid
      container
      item
      xs={12}
      ref={containerRef}
      alignItems="flex-start"
      justifyContent="flex-start"
      sx={{
        paddingTop: { xs: 5, md: 32 }
      }}>
      <Grid item sx={{ marginLeft: { xs: 4, md: 30 }, marginBottom: { xs: 5, md: 10 } }} xs={12}>
        <HeadlineSection
          containerRef={containerRef}
          firstLineText={[{ text: 'Selected', color: 'primary.main', variant: 'TobiasBig-h1' }]}
          secondLineText={[
            { text: isMobile ? 'cases' : 'customer cases', color: 'primary.transparent', variant: 'PoppinsBig-h1' },
          ]}
        />
      </Grid>
      <Grid
        container
        spacing={isMobile ? 5 : 19}
        sx={{ marginBottom: { xs: 5, md: 10 } }}
        direction={isMobile ? 'column-reverse' : 'row'}>
        <Grid item xs={12} md={6} alignSelf="center">
          <TextContainer>
            <Typography
              color="primary.main"
              variant="PoppinsBig-subtitle2"
              sx={{ opacity: firstTextOpacity }}>
              For Houe, a Danish designer furniture company, we built a system to track recycled plastic from collection all the way to finished furniture.
              <p>
              The system connects the full supply chain which includes clients, collection partners, recycling facilities, and manufacturers.
              </p>
              <p>
              It also enables clients to follow the process from the initial plastic collection to their own finished product.
              </p>
            </Typography>
          </TextContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <MediaSection
            mediaItems={[{ mediaUrl: HoueImage1, imageDimensions: { height: '500px', width: '100%'} }, {mediaUrl: HoueImage2, imageDimensions: { height: '500px', width: '100%' } }, { mediaUrl: HoueImage3, imageDimensions: { height: '500px', width: '100%' }  } ]}
            shouldCarouselMultipleMedias={!shouldCarouselSecondSection}
            disableImageMovement
            mediaLocation="full-screen"
            marginTop={0}
          />
        </Grid>
      </Grid>
      <Grid container spacing={isMobile ? 5 : 19}>
        <Grid item xs={12} md={6}>
          <MediaSection
            mediaItems={[{ mediaUrl: TheWeeDairyImage1 }, { mediaUrl: TheWeeDairyImage2 }, { mediaUrl: TheWeeDairyImage3 },{ mediaUrl: TheWeeDairyImage4 },{ mediaUrl: TheWeeDairyImage5 },{ mediaUrl: TheWeeDairyImage6 }]}
            shouldCarouselMultipleMedias={shouldCarouselSecondSection}
            mediaLocation="full-screen"
            disableImageMovement
            marginTop={0}
          />
        </Grid>
        <Grid item xs={12} md={6} alignSelf="center">
          <TextContainer textPosition="right">
            <Typography
              color="primary.main"
              variant="PoppinsBig-subtitle2"
              sx={{ opacity: secondTextOpacity }}>
              For "The wee dairy", an independant Scottish micro dairy, we built an internal system to keep track of milk production, orders, and sales. 
              It replaced a large amount of spreadsheets with manual data entries. 
              <p>
              The system included features such as milk forecast predictions, order and sales overviews, and dynamic guidance to support their daily work.
              </p>
            </Typography>
          </TextContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PartnershipPageTeaserSection;
