import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import InteractiveLink from '../InteractiveLink';
import HeadlineSection, { HeadlineSectionProps } from './HeadlineSection';
import MediaSection from './MediaSection';

type Props = { imageUrl: string; text: string; link: string } & Pick<
  HeadlineSectionProps,
  'firstLineText' | 'secondLineText'
>;

const NextPageSection: FC<Props> = ({ imageUrl, text, link, firstLineText, secondLineText }) => {
  const containerRef = useRef(null);
  const router = useRouter();

  return (
    <Grid item container xs={12} spacing={5} sx={{ mt: { xs: 16, md: 32 } }} ref={containerRef}>
      <Grid item xs={12} md={6}>
        <MediaSection
          mediaLocation="full-screen"
          mediaUrl={imageUrl}
          imageDimensions={{ width: '100%', height: 'auto' }}
        />
      </Grid>
      <Grid item xs={12} md={6} alignSelf="flex-end" sx={{ pb: 4 }}>
        <HeadlineSection
          containerRef={containerRef}
          firstLineText={firstLineText}
          secondLineText={secondLineText}
        />
        <Typography
          variant="PoppinsBig-subtitle2"
          color="secondary"
          sx={{ my: 4, mr: { xs: 2, md: 18 }, ml: { xs: 2, md: 0 } }}>
          {text}
        </Typography>
        <InteractiveLink
          text="Continue to read"
          navigate={() => router.push(link)}
          sx={{ mx: { xs: 2, md: 0 } }}
          variant="PoppinsBig-button"
          color="secondary.transparent"
        />
      </Grid>
    </Grid>
  );
};

export default NextPageSection;
