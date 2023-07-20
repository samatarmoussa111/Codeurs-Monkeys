import { useAuth } from "@/context/AuthUserContext";
import Avatar from "@/ui/design-system/avatar/Avatar";
import Typography from "@/ui/design-system/typography/Typography";
import Link from "next/link";

const AccountAvatarLink = () => {
  const { authUser } = useAuth();
  const { photoURL, displayName } = authUser;
  return (
    <Link href="/mon-espaces" className="flex items-center gap-2">
      <Avatar
        src={photoURL}
        alt={
          displayName ? `avatar de ${displayName}` : "avatar de l'utilisateur"
        }
        size="large"
      />
      <div className="max-w-[160px]">
        <Typography variant="caption2" weight="medium" className="truncate">
          {displayName ? displayName : "Bienvenue"}
        </Typography>
        <Typography variant="caption4" weight="medium" theme="gray">
          Mon compte
        </Typography>
      </div>
    </Link>
  );
};

export default AccountAvatarLink;
