import { createStyles, Header, Group, Box, rem, Image } from "@mantine/core";
import Logo from "./assets/Pro-Legal-Serve-Logo 1.png";
import Group3 from "./assets/Group 3.png";
import Vector from "./assets/Vector.png";


const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <Box pb={120}>
      <Header height={100} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Group
            sx={{
              height: "100%",
              //   border: "1px solid red",
            }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Image src={Logo}></Image>
          </Group>

          <Group
            sx={{
              height: "100%",
              //   border: "1px solid red",
              gap: "40px",
            }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Group
              sx={{
                border: "1px solid",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                padding: "0.8rem",
              }}
            >
              <Image src={Vector}></Image>
            </Group>
            <Group>
              <Image src={Group3}></Image>
            </Group>
          </Group>
        </Group>
      </Header>
    </Box>
  );
};
export default Navbar;
