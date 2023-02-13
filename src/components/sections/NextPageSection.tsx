import { Grid, Typography } from '@mui/material';
import { FC, useRef } from 'react';
import { useNavigate } from 'react-router';
import InteractiveLink from '../InteractiveLink';
import HeadlineSection, { HeadlineSectionProps } from './HeadlineSection';

type Props = { imageUrl: string; text: string; link: string } & Pick<
  HeadlineSectionProps,
  'firstLineText' | 'secondLineText'
>;

const NextPageSection: FC<Props> = ({ imageUrl, text, link, firstLineText, secondLineText }) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  return (
    <Grid
      item
      container
      xs={12}
      spacing={5}
      alignContent="flex-end"
      sx={{ mt: 32 }}
      ref={containerRef}>
      <Grid item xs={6}>
        <img src={imageUrl} style={{ width: '100%', height: 'auto' }} />
      </Grid>
      <Grid item xs={6} alignSelf="flex-end" sx={{ pb: 4 }}>
        <HeadlineSection
          containerRef={containerRef}
          firstLineText={firstLineText}
          secondLineText={secondLineText}
        />
        <Typography variant="PoppinsBig-subtitle2" color="secondary" sx={{ mb: 4, mt: 4, mr: 18 }}>
          {text}
        </Typography>
        <InteractiveLink
          text="Continue to read"
          navigate={() => navigate(link)}
          variant="PoppinsBig-button"
          color="secondary.transparent"
        />
      </Grid>
    </Grid>
  );
};

export default NextPageSection;
