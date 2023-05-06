import Container from "@/ui/components/container/Container";
import Footer from "@/ui/components/navigation/Footer";
import Navigation from "@/ui/components/navigation/Navigation";
import Seo from "@/ui/components/seo/Seo";
import Avatar from "@/ui/design-system/avatar/Avatar";
import Button from "@/ui/design-system/button/Button";
import Logo from "@/ui/design-system/logo/Logo";
import Spinner from "@/ui/design-system/spinner/Spinner";
import Typography from "@/ui/design-system/typography/Typography";
import { RiHome2Line } from "react-icons/ri";

const DesignSystem = () => {
  return (
    <>
      <Seo
        title="Design system"
        description="Mon super projet pour apprendre Next.js"
      />
      <Navigation />

      <Container className="space-y-5">
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Typography
          </Typography>
          <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Display
              </Typography>
              <Typography variant="display" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H1
              </Typography>
              <Typography variant="h1" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H1
              </Typography>
              <Typography variant="h1" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H2
              </Typography>
              <Typography variant="h2" component="h2">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H3
              </Typography>
              <Typography variant="h3" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H4
              </Typography>
              <Typography variant="h4" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Lead
              </Typography>
              <Typography variant="lead" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body lg
              </Typography>
              <Typography variant="body-lg" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body sm
              </Typography>
              <Typography variant="body-sm" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body base
              </Typography>
              <Typography variant="body-base" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 1
              </Typography>
              <Typography variant="caption1" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 2
              </Typography>
              <Typography variant="caption2" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 3
              </Typography>
              <Typography variant="caption3" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 4
              </Typography>
              <Typography variant="caption4" component="h1">
                Facilitez vous la vie grâce à l'automatistion
              </Typography>
            </div>
          </div>
        </div>

        {/* Spinners */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Spinners
          </Typography>
          <div className="flex items-center p-5 gap-2 border border-gray-400 rounded">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
          </div>
        </div>

        {/* Logo */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Logo
          </Typography>
          <div className="flex items-center p-5 gap-2 border border-gray-400 rounded">
            <Logo size="very-small" />
            <Logo size="small" />
            <Logo />
            <Logo size="large" />
          </div>
        </div>
        {/* Avatar */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Avatar
          </Typography>
          <div className="flex items-center p-5 gap-2 border border-gray-400 rounded">
            <Avatar
              src="/assets/images/avatar.png"
              alt="avatar de samatar"
              size="small"
            />
            <Avatar src="/assets/images/avatar.png" alt="avatar de samatar" />
            <Avatar
              src="/assets/images/avatar.png"
              alt="avatar de samatar"
              size="large"
            />
          </div>
        </div>

        <div className="space-y-2 ">
          <div className="flex items-center gap-4">
            <Button
              size="large"
              variant="secondary"
              isLoading
              icon={{ icon: RiHome2Line }}
            >
              S'abonner
            </Button>
            <Button
              size="large"
              variant="primary"
              isLoading
              icon={{ icon: RiHome2Line }}
            >
              S'abonner
            </Button>
            <Spinner size="small" />
            <Spinner size="medium" />
            <Spinner size="large" />
            <Button
              size="medium"
              variant="outline"
              isLoading
              icon={{ icon: RiHome2Line }}
            >
              S'abonner
            </Button>

            <Button
              size="large"
              variant="icon"
              icon={{ icon: RiHome2Line }}
              isLoading
            />
          </div>
          <div className="flex items-center gap-4">
            <Button size="medium" variant="primary">
              S'abonner
            </Button>
            <Button size="medium" variant="secondary">
              S'abonner
            </Button>
            <Button size="medium" variant="outline">
              S'abonner
            </Button>
            <Button size="medium" variant="disabled" disabled>
              S'abonner
            </Button>
            <Button
              size="medium"
              iconTheme="gray"
              variant="icon"
              icon={{ icon: RiHome2Line }}
              isLoading
            />
          </div>
          <div className="flex items-center gap-4">
            <Button size="small" variant="primary">
              S'abonner
            </Button>

            <Button
              size="small"
              iconTheme="secondary"
              variant="icon"
              icon={{ icon: RiHome2Line }}
              isLoading
            />
          </div>
          <div className="flex items-center gap-4">
            <Button size="small" variant="primary">
              S'abonner
            </Button>

            <Button
              size="small"
              iconTheme="secondary"
              variant="icon"
              icon={{ icon: RiHome2Line }}
            />
          </div>
        </div>
      </Container>
      <Footer/>
    </>
  );
};

export default DesignSystem;
