import { firebaseLogoutUser } from "@/api/authentication";
import Box from "@/ui/design-system/box/Box";
import Button from "@/ui/design-system/button/Button";
import Typography from "@/ui/design-system/typography/Typography";
import { toast } from "react-toastify";
import ActiveLink from "./ActiveLink";

const UserAccountNavigation = () => {
  const handleLogoutUser = async () => {
    const { error, data } = await firebaseLogoutUser();
    if (error) {
      toast.error(error.errorMessage);
      return;
    }
    toast.success("A bientôt sur codeurs monkeys");
  };
  return (
    <Box className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
        </Typography>
        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/mes-projets">Mes projets</ActiveLink>
        </Typography>
      </div>
      <Button variant="danger" action={handleLogoutUser}>
        Deconnexion
      </Button>
    </Box>
  );
};

export default UserAccountNavigation;
