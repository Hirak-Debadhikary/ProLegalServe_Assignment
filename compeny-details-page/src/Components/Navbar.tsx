// import { Button } from '@mantine/core'

// const Navbar = () => {
//   return (
//     <div>
//       <Button>Click Me!</Button>
//     </div>
//   )
// }

// export default Navbar

import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  rem,
} from "@mantine/core";
// import image from "./image.svg";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
    
  },

  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "md", cols: 1, spacing: 40 }] }
      >
        <Image
          src={"https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"}
          className={classes.mobileImage}
          
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
          >
            Get back to home page
          </Button>
        </div>
        <Image
          src={"https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"}
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  );
};
export default Navbar;
