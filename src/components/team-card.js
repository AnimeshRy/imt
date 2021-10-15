import { jsx } from "theme-ui";
import { Text, Heading, Image, Box, Link } from "theme-ui";

export default function TeamCard({src, altText, title, designation, social }) {
  return (
      <Box sx={styles.card}>
          <Image src={src} alt={altText} sx={styles.memberThumb} />
          <Box sx={styles.infoWrapper}>
            <Heading className="info__name" sx={styles.infoWrapper.name}>
                {title}
            </Heading>
            <Text className="info__designation" sx={styles.infoWrapper.designation}>
                {designation}
            </Text>
          </Box>
          <Box sx={styles.socialShare} className="social__share">
            {social.map((item) => (
                <Link key={item.id} href={item.path} className={item.name}>
                    {item.icon}
                </Link>
            ))}
          </Box>
      </Box>
  )
}

const styles = {
    card: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      py: [4, 3, 2, 5],
      transition: 'ease-in-out 0.4s',
      borderRadius: '8px',
      position: 'relative',
      '&:hover': {
        boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
        '.info__name': {
          color: 'primary',
        },
        '.info__designation': {
          color: 'primary',
        },
        '.social__share': {
          opacity: 1,
          a: {
            my: 0,
            py: [0, null, 1],
          },
        },
      },
    },

    memberThumb: {
      width: ['70px', '80px', '100px', null, null, '130px'],
      height: ['70px', '80px', '100px', null, null, '130px'],
      flexShrink: 0,
      border: '2px solid',
      borderColor: 'primary',
      borderRadius: '50%',
    },
    infoWrapper: {
      width: '100%',
      textAlign: 'center',
      mt: [3, null, 4],
      name: {
        fontSize: [1, 2, 3, null, null, 4],
        fontWeight: 'bold',
        lineHeight: [1.25, 1.35],
        transition: 'color 0.25s',
        mb: 1,
      },
      designation: {
        fontSize: ['14px', null, null, 2],
        fontWeight: 'body',
        lineHeight: 'heading',
        color: 'text',
        transition: 'color 0.25s',
      },
    },
    socialShare: {
      position: ['relative', null, 'absolute'],
      bottom: [9, null, '26px', 4],
      width: ['100%', null, 'auto'],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.25s',
      opacity: [1, null, 0],
      pt: 2,
      a: {
        fontSize: [0, 1, null, 2],
        color: ['text', null, 'primary'],
        lineHeight: '1em',
        my: [0, null, '-2px'],
        px: 1,
        transition: 'all 0.25s',
        '&:hover': {
          color: ['primary', null, 'text'],
        },
      },
    },
};
